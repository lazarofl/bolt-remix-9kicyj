import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer to prevent content from showing behind the fixed header */}
      <div className="h-24" />
      
      {/* Fixed header with dynamic backdrop */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-colors duration-200 ${
          isScrolled 
            ? "bg-white/50 backdrop-blur-md dark:bg-gray-950/50" 
            : "bg-gray-50 dark:bg-gray-950"
        }`}
      >
        <nav className={`mx-auto max-w-7xl rounded-2xl px-6 transition-all duration-200 ${
          isScrolled 
            ? "bg-gradient-to-b from-white to-white/95 shadow-lg shadow-gray-200/30 backdrop-blur-md dark:from-gray-900 dark:to-gray-900/95 dark:shadow-gray-900/30"
            : "bg-transparent"
        }`}>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-xl font-bold text-transparent dark:from-white dark:to-gray-300">
                Squadds
              </span>
            </Link>

            {/* Center Navigation */}
            <div className="hidden md:flex md:items-center md:gap-x-4">
              <Link
                to="#features"
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100/50 dark:text-gray-200 dark:hover:bg-gray-800/50"
              >
                Features
              </Link>
              <Link
                to="#pricing"
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100/50 dark:text-gray-200 dark:hover:bg-gray-800/50"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100/50 dark:text-gray-200 dark:hover:bg-gray-800/50"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100/50 dark:text-gray-200 dark:hover:bg-gray-800/50"
              >
                Contact
              </Link>
            </div>

            {/* Login Button */}
            <Link
              to="/login"
              className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-sm font-medium text-white transition-all hover:from-blue-500 hover:to-blue-400 hover:shadow-md"
            >
              Login
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}