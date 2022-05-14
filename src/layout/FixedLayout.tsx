import type { FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "src/component/Button";
import Navigation from "src/layout/Navigation";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

type Props = {
  className?: string;
  children: ReactNode;
  inView?: boolean;
};

/**
 * @package
 */
export const FixedLayout: FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { inView, ref } = useInView({ threshold: 0 });

  return (
    <div className="relative mx-auto min-h-screen">
      <Header opacity="80" />
      <Navigation inView={inView} />
      <div ref={ref} />
      <main className="mx-5 mt-8 text-zinc-500 sm:mx-20 md:mt-16 lg:mx-32">
        <LayoutErrorBoundary>{props.children}</LayoutErrorBoundary>
      </main>
      <div className="flex justify-around items-center mt-20 h-24">
        <div className="opacity-0">
          <Button onClick="Home">Home</Button>
        </div>
        <div>
          <Button onClick="Return">Return</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
