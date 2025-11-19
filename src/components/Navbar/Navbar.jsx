import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // --- Scroll Effect ---
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-white/95 text-black shadow-lg"
          : "bg-[linear-gradient(145deg,#000428,#004e92)] text-white"
      }`}
    >
      <div className="flex justify-between items-center px-5 md:px-10 py-4 md:py-6">
        {/* Logo */}
        <Link to="/" onClick={handleLinkClick}>
          <h1
            className={`text-2xl md:text-3xl font-bold cursor-pointer hover:scale-105 transition-transform ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Aritri{" "}
            <span
              className={`${scrolled ? "text-purple-600" : "text-purple-300"}`}
            >
              Saha
            </span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-lg">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`transition-colors ${
                scrolled ? "hover:text-purple-600" : "hover:text-purple-300"
              }`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-black hover:bg-gray-200"
                : "text-white hover:bg-white/10"
            }`}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-[linear-gradient(145deg,#000428,#004e92)] backdrop-blur-sm transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul
          className={`flex flex-col gap-6 mt-24 px-5 text-lg font-medium text-white bg-[linear-gradient(145deg,#000428,#004e92)]`}
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-purple-300 transition-colors"
              onClick={handleLinkClick}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
