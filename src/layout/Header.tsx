import cc from "classcat";
import type { VFC } from "react";
import { Logo, LogoSmall } from "src/component/Logo";
import { siteMetadata } from "src/data/siteMetaData";
import Navigation from "src/layout/Navigation";

type Props = {
  className?: string;
  opacity?: "ordinary" | "aboutus";
};

/**
 * @package
 */
export const Header: VFC<Props> = (props) => {
  return (
    <header>
      <div className="sm:block absolute top-2 right-[10%] md:right-[6%] z-50 justify-between translate-x-[50%] translate-y-[50%]">
        <Logo />
        <LogoSmall />
      </div>
      <div className="flex relative justify-center pt-16 pb-32 min-w-full opacity-100">
        <div
          className={cc([
            {
              "absolute top-0 w-full h-full bg-top bg-cover opacity-100": props.opacity === "ordinary",
            },
            {
              "absolute top-0 w-full h-full bg-top bg-cover opacity-0": props.opacity === "aboutus",
            },
          ])}
          style={{
            backgroundImage: "url('/static/images/header/background.jpg')",
          }}
        ></div>
        <div className="container relative py-4 sm:py-10 md:py-14 w-full text-center">
          <div className="absolute top-[30%] sm:top-[35%] right-[50%] z-30 translate-x-[50%] translate-y-[50%]">
            <h1 className="z-20 font-caribri sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter lg:tracking-wide text-white whitespace-nowrap xxs:text-2xl xs:text-3xl">
              {siteMetadata.headerTitle}
            </h1>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export const HeaderFixed: VFC = () => {
  return (
    <header>
      <Navigation />
    </header>
  );
};
