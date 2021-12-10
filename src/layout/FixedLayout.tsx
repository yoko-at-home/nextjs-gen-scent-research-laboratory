import Link from "next/link";
import type { ReactNode, VFC } from "react";

import { Footer } from "./Footer";
import { HeaderFixed } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

type Props = {
  className?: string;
  theme?: "main" | "about" | "newsArticles";
  children: ReactNode;
};

/**
 * @package
 */
export const FixedLayout: VFC<Props> = (props) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] mx-auto max-w-screen-md min-h-screen">
      <HeaderFixed />
      <main className="mx-5">
        <LayoutErrorBoundary>{props.children}</LayoutErrorBoundary>
      </main>
      <div className="flex justify-between mt-20">
        <div>
          {/* <Link href={`/`}> */}
          <a className="p-3 px-3 mr-5 text-xs font-bold text-gray-300 bg-gradient-to-r from-gray-400 to-gray-500 rounded opacity-0">
            Home
          </a>
          {/* </Link> */}
        </div>
        <div>
          <Link href={`/product/`}>
            <a className="p-3 px-3 mr-5 text-xs font-bold text-gray-100 bg-gradient-to-r from-gray-400 to-gray-500 rounded opacity-80">
              Product Top
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
