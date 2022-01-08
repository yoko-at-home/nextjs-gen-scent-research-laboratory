import type { ReactNode, VFC } from "react";
import { Button } from "src/component/Button";

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
    <div className="grid grid-rows-[auto,1fr,auto] mx-auto max-w-screen-lg min-h-screen">
      <HeaderFixed />
      <main className="mx-5 text-zinc-500">
        <LayoutErrorBoundary>{props.children}</LayoutErrorBoundary>
      </main>
      <div className="flex justify-around items-center mt-20">
        <div className="opacity-0">
          <Button onClick="Home">Home</Button>
        </div>
        <Button onClick="Return">Return</Button>
      </div>
      <Footer />
    </div>
  );
};
