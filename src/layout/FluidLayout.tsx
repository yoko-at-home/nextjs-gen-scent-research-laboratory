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
      <main>
        <LayoutErrorBoundary>{props.children}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
