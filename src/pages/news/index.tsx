import axios from "axios";
import type { GetStaticProps } from "next";
import Link from "next/link";
import type { VFC } from "react";
import { Pagination } from "src/component/Pagenation";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

type Props = {
  data: {
    body: HTMLAnchorElement;
    createdAt: Date;
    description: string;
    id: string;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    updatedAt: Date;
  }[];
  totalCount: number;
};

const News: VFC<Props> = (props) => {
  return (
    <FluidLayout width="main">
      <PageSEO
        title={`News - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />

      <PageTitle>
        <span className="tracking-wider ">最新情報</span>
      </PageTitle>
      <ul>
        {props.data.map((item) => {
          return (
            <li key={item.id}>
              <div className="flex flex-col p-8 mb-10 bg-gray-200 rounded sm:p-3 bg-opacity-50">
                <div className="mb-3 font-semibold sm:font-bold">{item.title}</div>
                <div className="flex flex-row-reverse justify-between items-end">
                  <Link href={`/news/${item.id}`} passHref>
                    <a aria-label="Read more">
                      {item.body === undefined ? null : (
                        <span className="p-2 ml-5 whitespace-nowrap bg-gray-300">詳細</span>
                      )}
                    </a>
                  </Link>
                  <div className="text-sm sm:text-base">{item.description}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {props.totalCount < 6 ? null : <Pagination totalCount={props.totalCount} />}
    </FluidLayout>
  );
};
export default News;

export const getStaticProps: GetStaticProps<Props, never, { id: string; draftKey: string }> = async ({
  preview,
  previewData,
}): Promise<{
  props: Props;
}> => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY || "" },
  };
  // console.log(process.env.NEXT_PUBLIC_API_URL + "news?limit=9999");
  // console.log(process.env.API_KEY);

  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "news/?limit=9999", key);
  // console.log("foooooooooooooooxxx?");
  const data = await res.data;
  // console.log("foooooooooooooooooooooooo");

  // console.log(res.data);

  // プレビュー時は draft のコンテンツを追加
  if (preview) {
    const draftUrl = process.env.NEXT_PUBLIC_API_URL + "news/" + previewData?.id + `?draftKey=${previewData?.draftKey}`;
    const draftRes = await axios.get(draftUrl, key);
    data.unshift(await draftRes.data);
  }

  return {
    props: {
      data: data.contents,
      totalCount: data.totalCount,
    },
  };
};
