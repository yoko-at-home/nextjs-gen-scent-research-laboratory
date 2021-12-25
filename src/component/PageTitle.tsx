import type { NextPage } from "next";

export const PageTitle: NextPage = (props) => {
  return (
    <h1 className="mt-20 mb-5 text-3xl font-extrabold tracking-tight leading-9 sm:text-4xl sm:leading-10 md:mt-24 md:mb-16 md:text-5xl md:leading-10 lg:mb-10">
      {props.children}
    </h1>
  );
};
export const PageSubTitle: NextPage = (props) => {
  return <h2 className="mt-10 mb-5 text-2xl font-bold md:mt-14 md:mb-8 md:text-3xl">{props.children}</h2>;
};
