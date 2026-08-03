import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import {
  Home,
  Briefcase,
  BookOpen,
  FileText,
  Phone,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

 useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "auto";

  return () => {
    document.body.style.overflow = "auto";
  };
}, [open]);


  const menu = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/services", icon: Briefcase },
    { name: "Resources", path: "/resources", icon: BookOpen },
    { name: "Blogs", path: "/blogs", icon: FileText },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto h-20 px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <img src={Logo} className="w-40" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {menu.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition font-medium ${
                  pathname === item.path
                    ? "text-pink-600"
                    : "text-gray-600 hover:text-pink-500"
                }`}
              >
                {item.name}
              </Link>
            ))}

          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-semibold shadow-lg hover:scale-105 duration-300 flex items-center gap-2">
              Let's Talk
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden"
          >
            <Menu size={30} />
          </button>

        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-white z-50 shadow-2xl transition-all duration-300 ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 h-20">

          <img src={Logo} className="w-36" alt="" />

          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            <X />
          </button>

        </div>

        {/* Menu */}
        <div className="p-5 space-y-2">

          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-4 rounded-xl px-4 py-4 transition ${
                  pathname === item.path
                    ? "bg-pink-500 text-white shadow-lg"
                    : "hover:bg-pink-50 text-gray-700"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}

        </div>

        {/* Bottom */}
        <div className="absolute bottom-6 left-5 right-5">

          <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-600 py-4 text-white font-semibold shadow-xl hover:scale-105 transition">
            Let's Talk
            <ArrowRight size={18} />
          </button>

        </div>

      </aside>
    </>
  );
};

export default Navbar;