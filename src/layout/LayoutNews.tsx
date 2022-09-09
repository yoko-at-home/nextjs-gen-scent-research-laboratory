import type { ReactNode, VFC } from "react";
import { Button } from "src/component/Button";
import { ButtonToNews } from "src/component/Button/Button";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

type Props = {
  className?: string;
  children: ReactNode;
};

/**
 * @package
 */
export const LayoutNews: VFC<Props> = (props) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] mx-auto min-h-screen">
      <Header opacity="80" />
      <main className="mx-5 mt-8 text-zinc-500 sm:mx-20 md:mt-16 lg:mx-32">
        <LayoutErrorBoundary>{props.children}</LayoutErrorBoundary>
      </main>
      <div className="flex justify-around items-center mt-24 h-24">
        <div className="opacity-0">
          <Button onClick="Home">Home</Button>
        </div>
        <div>
          <ButtonToNews>News Top</ButtonToNews>
        </div>
      </div>
      <Footer />
    </div>
  );
};