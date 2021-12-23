/* eslint-disable @typescript-eslint/naming-convention*/
import type { NextPage } from "next";
import Image from "next/image";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";

import { client } from "../../../lib/client";

type Props = {
  data: string;
};

const OtherId: NextPage<Props> = (props: any) => {
  return (
    <FixedLayout>
      <PageSEO title={`他サービス - ${siteMetadata.author}`} description={siteMetadata.description} />
      <main>
        <div className="relative px-3 pt-5 my-6 h-28 text-gray-700 sm:w-2/3">
          <Image className="rounded-lg" src={props.other.image.url} layout="fill" />
          <div className="absolute text-xl font-bold md:text-2xl">
            <div className="">{props.other.title}</div>
            <div className="text-xl md:text-2xl">{props.other.subtitle}</div>
          </div>
        </div>{" "}
        {/* <p>{props.other.publishedAt}</p> */}
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.other.body}`,
          }}
        />
      </main>
    </FixedLayout>
  );
};

export default OtherId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "other-services" });

  const paths = data.contents.map((content: any) => {
    return `/product/other-services/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "other-services", contentId: id });

  return {
    props: {
      other: data,
    },
  };
};
