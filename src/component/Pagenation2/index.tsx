import Link from "next/link";
import { memo } from "react";

type Props = {
  totalCount: number;
  cardsPerPage: number;
  maxPageNumber?: number;
  currentPageNumber: number;
};

export const Pagination2: React.FC<Props> = memo((props) => {
  const { currentPageNumber, maxPageNumber } = props;
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;

  const previousLinkHref = `/news/page/${prevPage}`;
  const nextLinkHref = `/news/page/${nextPage}`;

  const PER_PAGE = 6;

  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  return (
    <div className="my-12 flex justify-center px-3">
      {currentPageNumber === 1 ? null : (
        <Link href={previousLinkHref}>
          <div className="text-lg">&lt; Previous</div>
        </Link>
      )}
      {range(1, Math.ceil(props.totalCount / PER_PAGE)).map((number, index) => {
        return (
          <li key={index} className="list-none p-3">
            <Link
              legacyBehavior
              href={`/news/page/${number}`}
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {number}
            </Link>
          </li>
        );
      })}
      {currentPageNumber === maxPageNumber ? null : (
        <Link href={nextLinkHref}>
          <div className="ml-4 text-lg">Next &gt;</div>
        </Link>
      )}
    </div>
  );
});

Pagination2.displayName = "Pagination";
