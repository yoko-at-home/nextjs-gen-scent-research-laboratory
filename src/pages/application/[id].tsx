/* eslint-disable @typescript-eslint/naming-convention*/
import type { NextPage } from "next";
import { PageSubTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";

type Props = {
  application: string;
};

const ApplicationId: NextPage<Props> = (props: any) => {
  return (
    <FixedLayout>
      <PageSEO
        title={`Application - ${siteMetadata.author}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <main>
        <PageSubTitle>{props.application.title}</PageSubTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.application.body}`,
          }}
        />
      </main>
    </FixedLayout>
  );
};

export default ApplicationId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "application" });

  const paths = data.contents.map((content: any) => {
    return `/application/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "application", contentId: id });

  return {
    props: {
      application: data,
    },
  };
};
