/* eslint-disable @typescript-eslint/naming-convention */
import Link from "next/link";
import { Pagination } from "src/component/Pagenation";

const PER_PAGE = 5;

export default function newsPageId({ news, totalCount }) {
  return (
    <div>
      <ul>
        {news.map((news) => {
          return (
            <li key={news.id}>
              <Link href={`news/${news.id}`}>
                <a>{news.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <Pagination totalCount={totalCount} />
    </div>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, key);

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
    headers: { "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news?offset=${(id - 1) * 5}&limit=5`, key)
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
