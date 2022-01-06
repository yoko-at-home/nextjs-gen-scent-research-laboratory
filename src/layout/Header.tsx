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
      <div className="absolute top-2 right-[10%] z-50 justify-between transform translate-x-[50%] translate-y-[50%] sm:block md:right-[6%]">
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
        <div className="container relative py-4 w-full text-center sm:py-10 md:py-14">
          <div className="absolute top-[30%] right-[50%] z-30 transform translate-x-[50%] translate-y-[50%] sm:top-[35%]">
            <h1 className="z-20 font-caribri text-2xl font-black text-white whitespace-nowrap sm:text-4xl md:text-5xl lg:text-6xl lg:tracking-wide xl:text-7xl">
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
