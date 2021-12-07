import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";
import { NavLink } from "src/component/Button";
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
        <div className="absolute top-5 right-20 z-30">
          <Link href="/" aria-label="Gen-Scent Research Laboratory">
            <Image src={"/static/images/logo.png"} alt="logo" width="50px" height="50px" />
          </Link>
        </div>
        <div className="absolute top-24 left-32 z-30 md:top-28">
          <h1 className="z-20 text-3xl text-white sm:text-5xl lg:text-6xl xl:text-7xl">{siteMetadata.author}</h1>
        </div>
        <div className="hidden lg:block">
          <Image
            width="100%"
            height="25%"
            layout="responsive"
            src="/static/images/header/background.jpg"
            alt={siteMetadata.author}
          />
        </div>
        <div className="lg:hidden">
          <Image
            width="100%"
            height="35%"
            layout="responsive"
            src="/static/images/header/background.jpg"
            alt={siteMetadata.author}
          />
        </div>
      </div>
      <nav className="flex justify-center bg-gray-200">
        {items.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="bg-gray-500 text-white">
              <a className="inline-block p-4">{label}</a>
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};
