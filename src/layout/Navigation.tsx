import type { CSSProperties } from "react";
import { NavLink } from "src/component/Button";

const items = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/application", label: "Application" },
  { href: "/news", label: "News" },
  { href: "/aboutus", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

type Props = {
  inView: boolean;
  className?: CSSProperties;
};

const Navigation = ({ inView }: Props) => {
  return (
    <div className="sticky top-0">
      <nav
        className={
          inView
            ? "flex flex-wrap justify-center w-screen text-gray-600 bg-gray-300"
            : "flex flex-wrap justify-center w-screen text-gray-200 z-50 top-[0%] backdrop-blur bg-primary/40"
        }
      >
        {items.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="z-50 bg-[#291a29]/40 text-white">
              <a className="inline-block py-1 px-3 font-caribri text-base font-semibold hover:text-gray-50 whitespace-nowrap hover:bg-gray-400 bg-gradient-to-r focus:from-gray-300 focus:to-[#330033] sm:p-4">
                {label}
              </a>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigation;
