/* eslint-disable @typescript-eslint/naming-convention */
import Link from "next/link";
import { Pagination } from "src/component/Pagenation";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

export default function News({ news, totalCount }) {
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
}

export const getStaticProps = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/news?offset=0&limit=5`;
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY },
  };
  const data = await fetch(url, key)
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      return null;
    });

  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
    },
  };
};
