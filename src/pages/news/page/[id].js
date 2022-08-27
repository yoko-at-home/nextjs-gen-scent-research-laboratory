/* eslint-disable @typescript-eslint/naming-convention */
import Link from "next/link";
import { Pagination } from "src/component/Pagenation";
import { PageSubTitle } from "src/component/PageTitle";
import { LayoutNews } from "src/layout";

const PER_PAGE = 6;

export default function newsPageId({ news, totalCount }) {
  return (
    <LayoutNews>
      <PageSubTitle fontWeight="bold">ニュース一覧</PageSubTitle>
      <div className="flex flex-col justify-between min-h-full">
        <ul>
          {news.map((news) => {
            return (
              <li key={news.id}>
                {!news.body ? (
                  <div>
                    <div className="p-1 whitespace-nowrap">{news.title}</div>
                    <div className=" p-1">{news.description}</div>
                  </div>
                ) : (
                  <div>
                    <div className="p-1 whitespace-nowrap">{news.title}</div>
                    <div className="flex justify-between items-end">
                      <div className=" p-1">{news.description}</div>
                      <Link href={`/news/${news.id}`} passHref>
                        <a className="p-1 text-blue-400 hover:text-blue-900 whitespace-nowrap hover:bg-gray-300">
                          詳細
                        </a>
                      </Link>
                    </div>
                  </div>
                )}
                <hr></hr>
              </li>
            );
          })}
        </ul>
        <Pagination totalCount={totalCount} />
      </div>
    </LayoutNews>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news`, key);

  const repos = await res.json();

  const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => {
    return `/news/page/${repo}`;
  });

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  };

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news?offset=${(id - 1) * 6}&limit=6`, key)
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
