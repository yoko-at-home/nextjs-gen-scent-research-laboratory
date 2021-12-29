/* eslint-disable @typescript-eslint/naming-convention*/
import type { NextPage } from "next";
import Image from "next/image";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";

import { client } from "../../../lib/client";

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
        <div className="relative px-3 pt-5 my-6 h-28 text-gray-700 sm:w-3/5">
          <Image className="rounded-lg" src={props.software.image.url} layout="fill" alt={props.software.title} />
          <div className="absolute text-xl font-bold leading-relaxed">
            <div className="">
              {props.software.title}
              <br />
              {props.software.subtitle}
            </div>
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
