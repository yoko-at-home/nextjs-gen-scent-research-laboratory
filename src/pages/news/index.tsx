import axios from "axios";
import type { GetStaticProps } from "next";
import Link from "next/link";
import type { VFC } from "react";
import { Pagination } from "src/component/Pagenation";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import type { BasicProps } from "src/types/pageType";

interface Props {
  news: BasicProps;
  totalCount: number;
}

const News: VFC<Props> = ({ news, totalCount }) => {
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
        {news.map((item) => {
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
      {totalCount < 6 ? null : <Pagination totalCount={totalCount} />}
    </FluidLayout>
  );
};
export default News;

export const getStaticProps: GetStaticProps = async ({
  preview,
  previewData,
}): Promise<{
  props: Props;
}> => {
  const key = {
    headers: { "X-API-KEY": process.env.CMS_API_KEY || "" },
  };
  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "news/?limit=9999", key);
  const data: Array<Props> = await res.data.contents;
  // プレビュー時は draft のコンテンツを追加
  if (preview) {
    const draftUrl = process.env.NEXT_PUBLIC_API_URL + "news/" + previewData.id + `?draftKey=${previewData.draftKey}`;
    const draftRes = await axios.get(draftUrl, key);
    data.unshift(await draftRes.data);
  }

  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
    },
  };
};
