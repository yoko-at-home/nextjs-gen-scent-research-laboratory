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
    <div className="flex justify-center pt-6 pb-8 space-y-2 md:space-y-5">
      <nav className="flex flex-row">
        <ul className="flex">
          {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => {
            return (
              <li key={index}>
                <Link href={`/news/page/${number}`}>
                  <a className="p-3 mr-6 text-gray-300 bg-gradient-to-r from-gray-400 to-gray-500 rounded opacity-80 sm:px-4">
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
