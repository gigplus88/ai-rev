import React from "react";
import { useState } from "react";
const links = [
  { name: "Home", href: "#home" },
  { name: "AI Types", href: "#ai-types" },
  { name: "AI Benefits", href: "#ai-benefits" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className=" bg-white/80  backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">
      <div className="app-container flex justify-between items-center h-16">
        {/* Logo */}
        <span className="gradient-text font-bold text-xl">AI Revolution</span>
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
            </a>
          ))}
          <a href="" className="nav-btn">
            Get Started
          </a>
        </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-200 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (<div className="md:hidden absolute top-16 left-0 w-full rounded-b-2xl px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {links.map((link) => (
              <a key={link.name} href={link.href} className= "mobile-nav-item"
              >
                {link.name}
              </a>
            ))}
            <a href="" className="mobile-nav-btn">
            Get Started
          </a>
          </div>)}
      </div>
    </nav>
  );
}
