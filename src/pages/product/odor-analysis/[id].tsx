/* eslint-disable @typescript-eslint/naming-convention*/
import type { NextPage } from "next";
import Image from "next/image";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";

import { client } from "../../../lib/client";

type Props = {
  odor: string;
};

const OdorId: NextPage<Props> = (props: any) => {
  return (
    <FixedLayout>
      <PageSEO
        title={`におい分析機器類 - ${siteMetadata.author}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <main>
        <div className="relative px-3 pt-5 my-6 h-28 text-gray-700 sm:w-2/3">
          <Image className="rounded-lg" src={props.odor.image.url} layout="fill" alt={props.odor.title} />
          <div className="absolute text-xl font-bold md:text-2xl">
            <div className="">{props.odor.title}</div>
            <div className="text-xl md:text-2xl">{props.odor.subtitle}</div>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.odor.body}`,
          }}
        />
      </main>
    </FixedLayout>
  );
};

export default OdorId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "odor-analysis" });

  const paths = data.contents.map((content: any) => {
    return `/product/odor-analysis/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "odor-analysis", contentId: id });

  return {
    props: {
      odor: data,
    },
  };
};
