import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const navRef = useRef(null);
  const [showNav, setShowNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  // ⬇️ Handle navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <>
      {/* ✅ Add keyframes using inline <style> above return */}
      <style>
        {`
          @keyframes dropdown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <nav
        ref={navRef}
        className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between md:p-5 p-3 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        } bg-transparent`}
      >
        {/* Logo */}
        <Link to="/" aria-label="Home">
          <img
            src="/images/nav-logo8.png"
            alt="nav-logo"
            className="md:w-50 w-25 hover:scale-110 transition-transform duration-200"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center text-2xl space-x-10 md:space-x-16">
          <Link
            to="/product"
            className="text-white transition-transform duration-200 hover:font-bold hover:text-black hover:scale-110 font-medium"
          >
            Product
          </Link>
          <Link
            to="/contact"
            className="text-white transition-transform duration-200 hover:font-bold hover:text-black hover:scale-110 font-medium"
          >
            Contact
          </Link>
          <Link
            to="/know-us"
            className="text-white transition-transform duration-200 hover:font-bold hover:text-black hover:scale-110 font-medium"
          >
            Know Us
          </Link>
          <Link
            to="/login"
            className="text-white transition-transform duration-200 hover:font-bold hover:text-black hover:scale-110 font-medium"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-white transition-transform duration-200 hover:font-bold hover:text-black hover:scale-110 font-medium"
          >
            Register
          </Link>
        </div>

        {/* Hamburger Icon - Mobile Only */}
        <button
          className="md:hidden cursor-pointer flex flex-col justify-center items-center space-y-1 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="w-7 h-0.5 bg-red-brown"></span>
          <span className="w-7 h-1 bg-red-brown"></span>
          <span className="w-7 h-0.5 bg-red-brown"></span>
        </button>
      </nav>

      {/* ✅ Mobile Dropdown Menu - animated with dropdown keyframe */}
      {menuOpen && (
        <div
          className="md:hidden fixed top-16 left-0 w-full bg-white/10 backdrop-blur-md p-6 flex flex-col space-y-4 z-40 text-black text-lg font-medium animate-[dropdown_0.4s_ease-out_forwards]"
        >
          <Link to="/product" onClick={() => setMenuOpen(false)} className="transition-transform duration-300 hover:scale-103">
            Product
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="transition-transform duration-300 hover:scale-103">
            Contact
          </Link>
          <Link to="/know-us" onClick={() => setMenuOpen(false)} className="transition-transform duration-300 hover:scale-103">
            Know Us
          </Link>
          <Link to="/login" onClick={() => setMenuOpen(false)} className="transition-transform duration-300 hover:scale-103">
            Login
          </Link>
          <Link to="/register" onClick={() => setMenuOpen(false)} className="transition-transform duration-300 hover:scale-103">
            Register
          </Link>
        </div>
      )}
    </>
  );
};

export default NavBar;
