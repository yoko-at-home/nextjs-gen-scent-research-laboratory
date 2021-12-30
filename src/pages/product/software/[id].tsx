/* eslint-disable @typescript-eslint/naming-convention*/
import type { NextPage } from "next";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";

const SoftwareId: NextPage = (props: any) => {
  return (
    <FixedLayout>
      <PageSEO
        title={`ソフトウェア・ライブラリ - ${siteMetadata.author}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />

      <main>
        <div className="mt-10 mb-12 text-2xl font-bold leading-relaxed md:text-3xl">
          <div className="">
            {props.software.title}
            <br />
            {props.software.subtitle}
          </div>
        </div>
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
