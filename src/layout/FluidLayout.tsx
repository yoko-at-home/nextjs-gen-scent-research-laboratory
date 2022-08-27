import cc from "classcat";
import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import Navigation from "src/layout/Navigation";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

type Props = {
  className?: string;
  width?: "main" | "product";
  children: ReactNode;
  inView?: boolean;
};

/**
 * @package
 */
export const FluidLayout: FC<Props> = (props) => {
  /* eslint-disable @typescript-eslint/naming-convention */
  const { inView, ref } = useInView({ threshold: 0 });
  const router = useRouter();
  const url = "/aboutus";
  return (
    <div className="relative min-h-screen">
      {router.pathname === url ? <Header opacity="0" /> : <Header opacity="100" />}
      <Navigation inView={inView} />
      <div ref={ref} />
      <div className="-z-10">
        <main
          className={cc([
            { "mx-5 sm:mx-10 md:mx-auto md:w-11/12 lg:w-9/12": props.width === "main" },
            { "mx-5 sm:mx-10 md:mx-auto md:w-11/12": props.width === "product" },
          ])}
        >
          <LayoutErrorBoundary>{props.children}</LayoutErrorBoundary>
        </main>
      </div>
      <Footer />
    </div>
  );
};
