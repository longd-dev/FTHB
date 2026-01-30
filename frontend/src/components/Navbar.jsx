import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion"; // <-- import motion

const navLinks = [
  { name: "Methodology", path: "/methodology" },
  { name: "ETF Solutions", path: "/etf-solutions" },
  { name: "Insights", path: "/insights" },
  { name: "About Us", path: "/about-us" },
];

const Navbar = () => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          className='w-full bg-white border-b border-gray-200 sticky top-0 z-50'
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={navbarVariants}
        >
          <div className='max-w-7xl mx-auto px-6 md:px-12 py-2 flex items-center justify-between'>
            {/* Logo */}
            <Link to='/' className='flex items-center cursor-pointer'>
              <IoShieldCheckmarkSharp className='text-[var(--primary-color)] text-5xl mr-2' />
              <div>
                <h1 className='text-xl font-bold text-[var(--primary-color)] leading-tight'>
                  Faith-Aligned
                </h1>
                <p className='text-xs text-emerald-600 font-medium tracking-wider uppercase'>
                  Investments
                </p>
              </div>
            </Link>

            {/* Navigation Links */}
            <ul className='flex items-center gap-8 text-sm font-medium'>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`text-[#0A2540] hover:text-[#1F5E3D] transition-colors ${
                        isActive ? "font-bold border-b-navorder-[#1F5E3D]" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button className='ml-6 px-5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-md transition'>
              Invest Now
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
