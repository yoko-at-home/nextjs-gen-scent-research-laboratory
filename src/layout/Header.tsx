import cc from "classcat";
import type { VFC } from "react";
import { NavLink } from "src/component/Button";
import { Logo, LogoSmall } from "src/component/Logo";
import { siteMetadata } from "src/data/siteMetaData";

const items = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/application", label: "Application" },
  { href: "/news", label: "News" },
  { href: "/aboutus", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

type Props = {
  className?: string;
  opacity?: "main" | "aboutus";
};

/**
 * @package
 */
export const Header: VFC<Props> = (props) => {
  return (
    <header>
      <main>
        <div className="absolute right-[6%] z-50 justify-between transform translate-x-[50%] translate-y-[50%] sm:block">
          <Logo />
          <LogoSmall />
        </div>
        <div
          className={cc([
            {
              "flex relative justify-center content-center items-center pt-16 pb-32 min-w-full opacity-100":
                props.opacity === "ordinary",
            },
            {
              "flex relative justify-center content-center items-center pt-16 pb-32 min-w-full opacity-0":
                props.opacity === "aboutus",
            },
          ])}
        >
          <div
            className="absolute top-0 w-full h-full bg-top bg-cover"
            style={{
              backgroundImage: "url('/static/images/header/background.jpg')",
            }}
          ></div>
          <div className="container relative">
            <div className="flex flex-wrap items-center">
              <div className="py-16 mr-auto ml-auto w-full text-center">
                <div className="absolute top-[30%] right-[50%] z-30 transform translate-x-[50%] translate-y-[50%] sm:top-[35%]">
                  <h1 className="z-20 font-caribri text-lg font-black text-white whitespace-nowrap sm:text-2xl md:text-3xl lg:text-5xl lg:tracking-wide xl:text-6xl">
                    {siteMetadata.headerTitle}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <nav className="flex flex-wrap justify-center text-gray-600 bg-gray-200">
        {items.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="bg-gray-700 text-white">
              <a className="inline-block p-1 font-caribri text-base font-semibold hover:text-gray-200 whitespace-nowrap hover:bg-gray-400 bg-opacity-80 bg-gradient-to-r focus:from-gray-300 focus:to-[#330033] sm:p-4">
                {label}
              </a>
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

export const HeaderFixed: VFC = () => {
  return (
    <header>
      <nav className="flex flex-wrap justify-center text-gray-100 bg-gray-400">
        {items.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="bg-gray-500">
              <a className="inline-block p-1 hover:text-gray-300 hover:bg-gray-600 sm:p-4">{label}</a>
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};
