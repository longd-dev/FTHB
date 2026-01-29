import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Methodology", path: "/methodology" },
];

const Navbar = () => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only if scroll is at the very top
      if (window.scrollY === 0) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full bg-white border-b border-gray-200 sticky top-0 z-50 transform transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link to='/'>
          <img
            src={logo}
            alt='FTHB'
            className='w-20 md:w-24 h-auto object-contain transition-transform hover:scale-105'
          />
        </Link>

        {/* Navigation Links */}
        <ul className='flex items-center gap-8 text-base font-medium'>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-[#0A2540] hover:text-[#1F5E3D] transition-colors ${
                    isActive ? "font-bold border-b-2 border-[#1F5E3D]" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
