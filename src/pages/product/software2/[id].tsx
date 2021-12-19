/* eslint-disable @typescript-eslint/naming-convention*/
import { PageSubTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";

import { client } from "../../../lib/client";

export default function Software2Id({ software2 }) {
  return (
    <FixedLayout>
      <PageSEO title={`ソフトウェア・ライブラリ - ${siteMetadata.author}`} description={siteMetadata.description} />
      <main>
        <PageSubTitle>{software2.title}</PageSubTitle>
        {/* <p>{software2.publishedAt}</p> */}
        <div
          dangerouslySetInnerHTML={{
            __html: `${software2.body}`,
          }}
        />
      </main>
    </FixedLayout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "software2" });

  const paths = data.contents.map((content) => {
    return `/product/software2/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "software2", contentId: id });

  return {
    props: {
      software2: data,
    },
  };
};
