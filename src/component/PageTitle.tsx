import cc from "classcat";
import type { NextPage } from "next";
import type { ReactNode, VFC } from "react";

type FontProps = {
  fontWeight: "ordinary" | "bold";
  children: ReactNode;
};

export const PageTitle: NextPage = (props) => {
  return (
    <h1 className="mt-20 mb-5 text-2xl font-extrabold tracking-tight leading-9 sm:text-2xl sm:leading-10 md:mt-24 md:mb-16 md:text-3xl md:leading-10 lg:mb-10">
      {props.children}
    </h1>
  );
};
export const PageSubTitle: VFC<FontProps> = (props) => {
  return (
    <h2
      className={cc([
        { "mt-10 mb-5 text-lg font-bold text-[#330033] md:mt-14 md:mb-8 md:text-2xl": "ordinary" },
        { "mt-10 mb-5 text-lg text-[#330033] md:mt-14 md:mb-8 md:text-2xl": "bold" },
      ])}
    >
      {props.children}
    </h2>
  );
};
export const ProductTitle: NextPage = (props) => {
  return <h1 className="mt-10 mb-6 text-xl font-bold leading-relaxed text-[#330033]">{props.children}</h1>;
};
export const ProductMainTitle: NextPage = (props) => {
  return <h1 className="mb-6 text-xl font-bold leading-relaxed text-[#330033] md:text-2xl">{props.children}</h1>;
};
