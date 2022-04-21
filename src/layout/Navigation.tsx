import { useEffect, useRef, useState } from "react";
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
  const isMountedRef = useRef(false);
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      window.addEventListener("scroll", handleScroll);
      isMountedRef.current = false;
    };
  }, []);
  return (
    <nav
      className={
        isScrolled
          ? "flex flex-wrap justify-center text-gray-200 fixed inset-x-0 z-50 top-[0%] backdrop-blur bg-primary/40"
          : "flex flex-wrap justify-center text-gray-600 bg-gray-300"
      }
    >
      {items.map(({ href, label }) => {
        return (
          <NavLink key={href} href={href} activeClassName="bg-[#291a29]/40 text-white">
            <a className="inline-block py-1 px-3 font-caribri text-base font-semibold hover:text-gray-50 whitespace-nowrap hover:bg-gray-400 bg-gradient-to-r focus:from-gray-300 focus:to-[#330033] sm:p-4">
              {label}
            </a>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navigation;
