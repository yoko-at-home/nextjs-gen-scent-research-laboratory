import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

type Props = {
  totalCount: number;
  cardsPerPage: number;
  paginate: any;
};

export const Pagination2: NextPage<Props> = ({ cardsPerPage, paginate, totalCount }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCount / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleSelectPage = (e: any) => {
    paginate(e);
    setSelectedPage(e);
  };

  const handleNextPage = () => {
    if (selectedPage >= 1 && selectedPage < Math.ceil(totalCount / cardsPerPage)) {
      paginate(selectedPage + 1);
      setSelectedPage(selectedPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (selectedPage > 1) {
      paginate(selectedPage - 1);
      setSelectedPage(selectedPage - 1);
    }
  };

  return (
    <div className="mt-4 flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={handlePrevPage}
          className="relative inline-flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="relative ml-3 inline-flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              onClick={handlePrevPage}
              className="relative inline-flex cursor-pointer items-center rounded-l-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="size-5" aria-hidden="true" />
            </button>
            {pageNumbers.map((number) => {
              return (
                <li key={number} className="list-none">
                  <Link
                    className={
                      selectedPage === number
                        ? "relative z-10 inline-flex cursor-pointer items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                        : "relative inline-flex cursor-pointer items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    }
                    href={`/news/${handleSelectPage(number)}`}
                    passHref
                  >
                    {number}
                  </Link>
                </li>
              );
            })}
            <button
              onClick={handleNextPage}
              className="relative inline-flex cursor-pointer items-center rounded-r-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="size-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
