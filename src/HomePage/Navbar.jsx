import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./mainlogo.png";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current location
  const [active, setActive] = useState("");

  useEffect(() => {
    // Set active state based on the current path
    const currentPath = location.pathname;
    if (currentPath === "/") setActive("HOME");
    else if (currentPath === "/Products") setActive("PRODUCTS");
    else if (currentPath === "/About") setActive("ABOUT");
    else if (currentPath === "/Contact") setActive("CONTACT US");
  }, [location]); // Re-run on location change

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-blue-100 text-center text-xs sm:text-sm p-2">
        Now available in Rajkot 🏭
      </div>

      {/* Navbar */}
      <div className="w-full flex items-center justify-between text-gray-800 max-w-full overflow-x-hidden transition-all duration-300 pt-3 pb-4 shadow-md">
        {/* Left Navigation Links for Larger Screens */}
        <ul className="hidden sm:flex flex-grow justify-end space-x-8 font-semibold text-xs sm:text-sm pr-4">
          <li className={`hover:bg-blue-200 cursor-pointer mx-6 px-2 py-1 rounded ${active === 'HOME' ? 'font-bold text-blue-600' : ''}`}>
            <Link to="/">HOME</Link>
          </li>
          <li className={`hover:bg-blue-200 cursor-pointer mr-14 px-2 py-1 rounded ${active === 'PRODUCTS' ? 'font-bold text-blue-600' : ''}`}>
            <Link to="/Products">PRODUCTS</Link>
          </li>
        </ul>

        {/* Logo Section */}
        <div className="flex-shrink-0 gap-28 mx-6 ml-12 flex justify-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-12 sm:h-16" />
          </Link>
        </div>

        {/* Right Navigation Links for Larger Screens */}
        <ul className="hidden sm:flex flex-grow justify-start space-x-8 font-semibold text-xs sm:text-sm pl-4">
          <li className={`hover:bg-blue-200 cursor-pointer mx-6 px-2 py-1 rounded ${active === 'ABOUT' ? 'font-bold text-blue-600' : ''}`}>
            <Link to="/About">ABOUT</Link>
          </li>
          <li className={`hover:bg-blue-200 cursor-pointer mx-6 px-2 py-1 rounded ${active === 'CONTACT US' ? 'font-bold text-blue-600' : ''}`}>
            <Link to="/Contact">CONTACT US</Link>
          </li>
        </ul>

        {/* Dropdown Button (Mobile) */}
        <div className="sm:hidden flex-grow flex justify-end items-center pr-4">
          <button className="text-blue-900 cursor-pointer" onClick={toggleMenu}>☰</button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div style={{ position: "absolute", zIndex: 50 }} className="bg-white sm:hidden bg-[rgb(230, 215, 187)] w-full shadow-md pb-2">
          <ul className="flex flex-col items-center space-y-4 py-2">
            <li>
              <Link to="/" className={`${active === "HOME" ? "font-bold text-blue-600" : ""}`}>HOME</Link>
            </li>
            <li>
              <Link to="/Products" className={`${active === "PRODUCTS" ? "font-bold text-blue-600" : ""}`}>PRODUCTS</Link>
            </li>
            <li>
              <Link to="/About" className={`${active === "ABOUT" ? "font-bold text-blue-600" : ""}`}>ABOUT</Link>
            </li>
            <li>
              <Link to="/Contact" className={`${active === "CONTACT US" ? "font-bold text-blue-600" : ""}`}>CONTACT US</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
