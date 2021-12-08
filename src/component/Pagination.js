import Link from "next/link";
import { useRouter } from "next/router";

export const Pagination = (props) => {
  const PER_PAGE = 11;

  const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  const router = useRouter();

  return (
    <div className="flex justify-center pt-6 pb-8 space-y-2 md:space-y-5">
      <nav className="flex flex-row">
        <div>
          {router.asPath === "/news" ? null : (
            <Link href={`/news`}>
              <a className="p-3 px-3 mr-5 text-xs font-bold text-gray-300 bg-gradient-to-r from-gray-400 to-gray-500 rounded opacity-80">
                News Top
              </a>
            </Link>
          )}
        </div>
        <ul className="flex">
          {range(1, Math.ceil(props.totalCount / PER_PAGE)).map((number, index) => {
            return (
              <li key={index}>
                <Link href={`/news/page/${number}`}>
                  <a className="p-3 mr-6 text-gray-300 bg-gradient-to-r from-gray-400 focus:from-purple-600 to-gray-500 focus:to-yellow-600 rounded opacity-80 sm:px-4">
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
