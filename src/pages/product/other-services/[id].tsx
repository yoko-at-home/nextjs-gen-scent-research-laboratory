/* eslint-disable @typescript-eslint/naming-convention*/
import { PageSubTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";

import { client } from "../../../lib/client";

export default function otherId({ other }) {
  return (
    <FixedLayout>
      <PageSEO title={`他サービス - ${siteMetadata.author}`} description={siteMetadata.description} />
      <main>
        <PageSubTitle>{other.title}</PageSubTitle>
        {/* <p>{other.publishedAt}</p> */}
        <div
          dangerouslySetInnerHTML={{
            __html: `${other.body}`,
          }}
        />
      </main>
    </FixedLayout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "other-services" });

  const paths = data.contents.map((content) => {
    return `/product/other-services/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "other-services", contentId: id });

  return {
    props: {
      other: data,
    },
  };
};
