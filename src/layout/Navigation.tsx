import { useEffect, useState } from "react";
import { NavLink } from "src/component/Button";

const items = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/application", label: "Application" },
  { href: "/news", label: "News" },
  { href: "/aboutus", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <nav
      className={
        isScrolled
          ? "flex flex-wrap justify-center text-gray-200 fixed inset-x-0 z-50 top-[0%] bg-opacity-40 backdrop-blur bg-[#330033]"
          : "flex flex-wrap justify-center text-gray-600 bg-gray-200"
      }
    >
      {items.map(({ href, label }) => {
        return (
          <NavLink key={href} href={href} activeClassName="bg-[#291a29] text-white bg-opacity-40">
            <a className="inline-block p-1 font-caribri text-base font-semibold hover:text-gray-200 whitespace-nowrap hover:bg-gray-400 bg-gradient-to-r focus:from-gray-300 focus:to-[#330033] sm:p-4 bg-opacity-80">
              {label}
            </a>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navigation;
