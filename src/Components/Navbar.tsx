"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between p-4 ${
        isScrolled ? "bg-slate-800 text-white" : "bg-transparent text-black"
      } sticky top-0 transition-colors duration-300 md:flex-row flex-col`}
    >
      <div className="flex gap-4 items-center justify-between flex-row">
        <span>Mozz Display</span>
        <button
          className="md:hidden hover:bg-white hover:text-black"
          onClick={() => setShowLinks(!showLinks)}
        >
          {showLinks ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4 gap-2 md:mt-0 mt-4">
        <Link href="/">
          <span
            className={`${
              showLinks ? "block" : "hidden"
            } hover:bg-white hover:text-black md:block`}
          >
            Home
          </span>
        </Link>
        <Link href="/product">
          <span
            className={`${
              showLinks ? "block" : "hidden"
            } hover:bg-white hover:text-black md:block`}
          >
            Product
          </span>
        </Link>
        <Link href="/services">
          <span
            className={`${
              showLinks ? "block" : "hidden"
            } hover:bg-white hover:text-black md:block`}
          >
            Services
          </span>
        </Link>
        <Link href="/about-us">
          <span
            className={`${
              showLinks ? "block" : "hidden"
            } hover:bg-white hover:text-black md:block`}
          >
            About Us
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

