import type { NextPage } from "next";
import Link from "next/link";

type Props = {
  totalCount: number;
};

export const Pagination: NextPage<Props> = ({ totalCount }) => {
  const PER_PAGE = 10;

  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  return (
    <div className="flex justify-center space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex flex-row">
        <ul className="flex">
          {range(1, Math.ceil(totalCount / PER_PAGE)).map((number) => {
            return (
              <li key={number}>
                <Link legacyBehavior href={`/news/page/${number}`}>
                  <div className="mr-6 rounded bg-gradient-to-r from-gray-400 to-gray-500 p-3 text-gray-300 opacity-80 sm:px-4">
                    {number}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
