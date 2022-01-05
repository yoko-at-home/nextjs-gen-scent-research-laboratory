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
  return (
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
  );
};

export default Navigation;
