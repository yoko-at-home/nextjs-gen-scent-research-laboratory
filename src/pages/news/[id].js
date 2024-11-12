/* eslint-disable @typescript-eslint/naming-convention*/
import ErrorPage from "next/error";
import Link from "next/link";
import { useRouter } from "next/router";
import { PageSubTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";

const NewsId = (props) => {
  // if (!props.data) {
  //   return <ErrorPage statusCode={404} />;
  // }
  const router = useRouter();

  if (router.isFallback && !props.data?.id) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <FixedLayout>
      <PageSEO
        title={`${props.data.title} - News - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <main className="break-all">
        {props.preview && (
          <Link legacyBehavior href="/api/clear-preview">
            プレビューモードを解除
          </Link>
        )}
        <PageSubTitle fontWeight="ordinary">{props.data.title}</PageSubTitle>
        {!props.data.body ? (
          <div>入力がありません</div>
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html: `${props.data.body}`,
            }}
          />
        )}
      </main>
    </FixedLayout>
  );
};

export default NewsId;

export const getStaticPaths = async () => {
  try {
    const key = {
      headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news`, key);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const repos = await res.json();

    const paths = repos.contents.map((repo) => {
      return { params: { id: repo.id } };
    });

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export const getStaticProps = async ({ params, preview = false, previewData }) => {
  try {
    const id = params?.id;
    if (!id) {
      return { notFound: true };
    }

    const draftKey = previewData?.draftKey;
    const key = {
      headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}news/${id}${draftKey !== undefined ? `?draftKey=${draftKey}` : ""}`,
      key,
    );

    if (!res.ok) {
      return { notFound: true };
    }

    const data = await res.json();

    if (!data) {
      return { notFound: true };
    }

    return {
      props: {
        data,
        preview: preview || false,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return { notFound: true };
  }
};
