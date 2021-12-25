/* eslint-disable @typescript-eslint/naming-convention*/
import type { NextPage } from "next";
import { PageSubTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";

const NewsId: NextPage = (props: any) => {
  return (
    <FixedLayout>
      <PageSEO
        title={`News - ${siteMetadata.author}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <main>
        <PageSubTitle>{props.news.title}</PageSubTitle>
        <p>{props.news.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.news.body}`,
          }}
        />
      </main>
    </FixedLayout>
  );
};

export default NewsId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content: any) => {
    return `/news/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
  };
};
