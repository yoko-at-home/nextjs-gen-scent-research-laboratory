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
    <div className="sticky top-0 z-50">
      <nav
        className={
          inView
            ? "flex w-screen flex-wrap justify-center bg-gray-300 text-gray-600"
            : "top-0 z-50 flex w-screen flex-wrap justify-center bg-primary/40 text-gray-200 backdrop-blur"
        }
      >
        {items.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="z-50 bg-[#291a29]/40 text-white">
              <a className="inline-block whitespace-nowrap bg-gradient-to-r px-3 py-1 font-caribri text-base font-semibold hover:bg-gray-400 hover:text-gray-50 focus:from-gray-300 focus:to-[#330033] sm:p-4">
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
