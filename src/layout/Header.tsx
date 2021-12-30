import Image from "next/image";
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
  // { href: "/members", label: "Members" },
];

/**
 * @package
 */
export const Header: VFC = () => {
  return (
    <header>
      <div className="relative">
        <div className="absolute top-[3%] right-[8%] z-50 justify-between transform translate-x-[50%] translate-y-[50%] sm:block xl:top-[5%]">
          <Logo />
          <LogoSmall />
        </div>
        <div className="absolute top-[30%] right-[50%] z-30 transform translate-x-[50%] translate-y-[50%] sm:top-[40%]">
          <h1 className="z-20 font-caribri text-2xl font-bold text-white whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {siteMetadata.author}
          </h1>
        </div>
        <div className="hidden lg:block">
          <Image
            width="100%"
            height="18%"
            layout="responsive"
            src="/static/images/header/background-lg.jpg"
            alt={siteMetadata.author}
            priority
          />
        </div>
        <div className="lg:hidden">
          <Image
            width="100%"
            height="30%"
            layout="responsive"
            src="/static/images/header/background.jpg"
            alt={siteMetadata.author}
            priority
          />
        </div>
      </div>
      <nav className="flex flex-wrap justify-center text-gray-600 bg-gray-200">
        {items.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="bg-gray-500 text-white">
              <a className="inline-block p-1 font-caribri text-base font-semibold hover:text-gray-200 whitespace-nowrap hover:bg-gray-400 bg-opacity-30 bg-gradient-to-r focus:from-gray-300 focus:to-[#330033] sm:p-4">
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
