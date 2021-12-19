/* eslint-disable @typescript-eslint/naming-convention*/
import type { NextPage } from "next";
import { PageSubTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";

import { client } from "../../../lib/client";

const SoftwareId: NextPage = (props: any) => {
  return (
    <FixedLayout>
      <PageSEO title={`ソフトウェア・ライブラリ - ${siteMetadata.author}`} description={siteMetadata.description} />

      <main>
        <PageSubTitle>{props.software.title}</PageSubTitle>
        {/* <p>{props.software.publishedAt}</p> */}
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.software.body}`,
          }}
        />
      </main>
    </FixedLayout>
  );
};

export default SoftwareId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "software" });

  const paths = data.contents.map((content: any) => {
    return `/product/software/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "software", contentId: id });

  return {
    props: {
      software: data,
    },
  };
};
