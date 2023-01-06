import type { NextPage } from "next";
import Link from "next/link";

type Props = {
  totalCount: number;
};

export const Pagination: NextPage<Props> = ({ totalCount }) => {
  const PER_PAGE = 6;

  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  return (
    <div className="flex justify-center space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex flex-row">
        <ul className="flex">
          {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => {
            return (
              <li key={index}>
                <Link href={`/news/page/${number}`}>
                  <a className="mr-6 rounded bg-gradient-to-r from-gray-400 to-gray-500 p-3 text-gray-300 opacity-80 sm:px-4">
                    {number}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
