/* eslint-disable @typescript-eslint/naming-convention*/
/* eslint-disable @typescript-eslint/no-unused-vars*/
import Link from "next/link";
import { Pagination } from "src/component/Pagination";
import { FixedLayout } from "src/layout";

const PER_PAGE = 12;

export default function softwarePageId({ software, totalCount }) {
  return (
    <FixedLayout>
      <ul>
        {software.map((software) => {
          return (
            <li key={software.id}>
              <Link href={`/product/software/${software.id}`}>
                <a>{software.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <Pagination totalCount={totalCount} />
    </FixedLayout>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  };

  const res = await fetch("https://your-service.microcms.io/api/v1/software", key);

  const repos = await res.json();

  const pageNumbers = [];

  const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => {
    return `/product/software/${repo}`;
  });

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };

  const data = await fetch(`https://your-service.microcms.io/api/v1/software?offset=${(id - 1) * 12}&limit=12`, key)
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      return null;
    });

  return {
    props: {
      software: data.contents,
      totalCount: data.totalCount,
    },
  };
};
