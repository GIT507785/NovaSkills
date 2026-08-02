import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white mt-2 ">
     <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6 md:px-12 lg:px-20">

        {/* Logo */}
        <Link to="/" className="w-36 lg:w-40">
          <img
            src={Logo}
            alt="NovaSkill"
            className="w-full h-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link
             onClick={()=>window.scrollTo({top:0 , behavior: "smooth"})}
            to="/"
            className="text-gray-600 hover:text-pink-500 transition"
          >
            Home
          </Link>

          <a
            href="#services"
            onClick={()=>window.scrollTo({ top: document.getElementById('services')
                ?.offsetTop, behavior: "smooth"})}
            className="text-gray-600 hover:text-pink-500 transition"
          >
            Services
          </a>

          <a
            onClick={()=>window.scrollTo({ top: document.getElementById('services')
                ?.offsetTop, behavior: 'smooth' })}
            href="#contact"
            className="text-gray-600 hover:text-pink-500 transition"
          >
            Contact
          </a>

          <a href="#resources"
            className="text-gray-600 hover:text-pink-500 transition"
          >
            Resources
          </a>

          <Link
            to="/blogs"
            className="text-gray-600 hover:text-pink-500 transition"
          >
            Blogs
          </Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a href="#contact" className="px-4 py-2 rounded-full border text-sm cursor-pointer border-pink-300 text-gray-800 font-semibold hover:bg-pink-500 hover:text-white transition duration-300">
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col px-6 py-6 gap-5">

            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link to="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Link to="/resources" onClick={() => setOpen(false)}>
              Resources
            </Link>

            <Link to="/blogs" onClick={() => setOpen(false)}>
              Blogs
            </Link>

            <button className="mt-3 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition">
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;