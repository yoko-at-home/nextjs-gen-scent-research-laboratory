import type { ReactNode, VFC } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

type Props = {
  className?: string;
  theme?: "main" | "about" | "newsArticles";
  children: ReactNode;
};

/**
 * @package
 */
export const FluidLayout: VFC<Props> = (props) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <Header />
      <main className="mx-5 sm:mx-10 md:mx-auto md:w-11/12 lg:w-9/12">
        <LayoutErrorBoundary>{props.children}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
