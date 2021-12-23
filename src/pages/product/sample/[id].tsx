/* eslint-disable @typescript-eslint/naming-convention*/
import type { NextPage } from "next";
import Image from "next/image";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";

import { client } from "../../../lib/client";

type Props = {
  sample: string;
};

const SampleId: NextPage<Props> = (props: any) => {
  return (
    <FixedLayout>
      <PageSEO
        title={`GC-MS備品・におい分析用製品・サンプル - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />

      <main>
        <div className="relative px-3 pt-5 my-6 h-28 text-gray-700 sm:w-2/3">
          <Image className="rounded-lg" src={props.sample.image.url} layout="fill" />
          <div className="absolute text-xl font-bold md:text-2xl">
            <div className="">{props.sample.title}</div>
            <div className="text-xl md:text-2xl">{props.sample.subtitle}</div>
          </div>
        </div>
        {/* <p>{props.sample.publishedAt}</p> */}
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.sample.body}`,
          }}
        />
      </main>
    </FixedLayout>
  );
};

export default SampleId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "sample" });

  const paths = data.contents.map((content: any) => {
    return `/product/sample/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "sample", contentId: id });

  return {
    props: {
      sample: data,
    },
  };
};
