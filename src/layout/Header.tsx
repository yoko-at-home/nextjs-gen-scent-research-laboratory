import Image from "next/image";
import type { VFC } from "react";
import { NavLink } from "src/component/Button";
import Logo from "src/component/Logo";
import { siteMetadata } from "src/data/siteMetaData";

const items = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/application", label: "Application" },
  { href: "/news", label: "News" },
  { href: "/aboutus", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/members", label: "Members" },
];

/**
 * @package
 */
export const Header: VFC = () => {
  return (
    <header>
      <div className="relative">
        <Logo />
        <div className="absolute top-16 left-8 z-30 sm:top-24 sm:left-32 md:top-28 xl:top-40 xl:left-60">
          <h1 className="z-20 text-lg text-white sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
            {siteMetadata.author}
          </h1>
        </div>
        <div className="hidden lg:block">
          <Image
            width="100%"
            height="25%"
            layout="responsive"
            src="/static/images/header/background.jpg"
            alt={siteMetadata.author}
            priority
          />
        </div>
        <div className="lg:hidden">
          <Image
            width="100%"
            height="35%"
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
              <a className="inline-block p-1 text-base hover:text-gray-200 whitespace-nowrap hover:bg-gray-400 sm:p-4 sm:text-lg">
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
