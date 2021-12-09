/* eslint-disable @typescript-eslint/naming-convention*/
import { PageSubTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";

import { client } from "../../../lib/client";

export default function odorId({ odor }) {
  return (
    <FixedLayout>
      <PageSEO title={`におい分析機器類 - ${siteMetadata.author}`} description={siteMetadata.description} />
      <main>
        <PageSubTitle>{odor.title}</PageSubTitle>
        {/* <p>{odor.publishedAt}</p> */}
        <div
          dangerouslySetInnerHTML={{
            __html: `${odor.body}`,
          }}
        />
      </main>
    </FixedLayout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "odor-analysis" });

  const paths = data.contents.map((content) => {
    return `/product/odor-analysis/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "odor-analysis", contentId: id });

  return {
    props: {
      odor: data,
    },
  };
};
