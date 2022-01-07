import cc from "classcat";
import type { VFC } from "react";
import { Logo, LogoSmall } from "src/component/Logo";
import Navigation from "src/layout/Navigation";

type Props = {
  className?: string;
  opacity?: "100" | "0";
};

/**
 * @package
 */
export const Header: VFC<Props> = (props) => {
  return (
    <header>
      <div className="absolute top-2 right-[10%] z-50 justify-between translate-x-[50%] translate-y-[50%] sm:block md:right-[6%]">
        <Logo />
        <LogoSmall />
      </div>
      <div className="flex relative justify-center pt-16 pb-32 min-w-full opacity-100">
        <div
          className={cc([
            {
              "absolute top-0 w-full h-full bg-top bg-cover opacity-100": props.opacity === "100",
            },
            {
              "absolute top-0 w-full h-full bg-top bg-cover opacity-0": props.opacity === "0",
            },
          ])}
          style={{
            backgroundImage: "url('/static/images/header/background.jpg')",
          }}
        ></div>
        <div className="container relative py-4 w-full text-center sm:py-10 md:py-14">
          <div className="absolute top-[30%] right-[50%] z-30 translate-x-[50%] translate-y-[50%] sm:top-[35%]">
            <h1 className="z-20 font-caribri text-2xl font-black text-white sm:text-3xl md:text-4xl md:whitespace-nowrap lg:text-5xl lg:tracking-wide xl:text-7xl">
              <span className="whitespace-nowrap ">Gen-Scent Research</span> <span>Laboratory</span>
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
