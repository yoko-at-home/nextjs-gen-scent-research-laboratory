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

  return (
    <div className="my-12 flex justify-between px-10">
      {currentPageNumber === 1 ? null : (
        <Link href={previousLinkHref}>
          <div className="text-lg">&lt; Previous</div>
        </Link>
      )}

      {currentPageNumber === maxPageNumber ? (
        <Link href={nextLinkHref}>
          <div className="ml-4 text-lg">Next &gt;</div>
        </Link>
      ) : null}
    </div>
  );
});

Pagination2.displayName = "Pagination";
