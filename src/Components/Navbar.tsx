import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // =========================
  // Desktop Links
  // =========================

  // const desktopLinks = [
  //   {
  //     name: "Home",
  //     path: "/",
  //     icon: Home,
  //   },
  //   {
  //     name: "Services",
  //     section: "services",
  //     icon: Briefcase,
  //   },
  //   {
  //     name: "Resources",
  //     section: "resources",
  //     icon: BookOpen,
  //   },
  //   {
  //     name: "Blogs",
  //     path: "/blogs",
  //     icon: FileText,
  //   },
  //   {
  //     name: "Contact",
  //     section: "contact",
  //     icon: Phone,
  //   },
  // ];

  // =========================
  // Mobile Links
  // =========================

  const mobileLinks = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Services",
      section: "services",
      icon: Briefcase,
    },
    {
      name: "Resources",
      section: "resources",
      icon: BookOpen,
    },
    {
      name: "Blogs",
      path: "/blogs",
      icon: FileText,
    },
    {
      name: "Contact",
      section: "contact",
      icon: Phone,
    },
  ];

  // =========================
  // Section Navigation
  // =========================

  const handleSectionClick = (section: string) => {
    setOpen(false);

    if (pathname === "/") {
      // Already on home page
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // Go to home page first
      navigate(`/#${section}`);
    }
  };

  // =========================
  // Mobile Navigation
  // =========================

  const handleMobileClick = (item: any) => {
    setOpen(false);

    if (item.section) {
      handleSectionClick(item.section);
      return;
    }

    if (item.path) {
      navigate(item.path);

      // Home / Blogs top
      if (item.path === "/" || item.path === "/blogs") {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto h-20 px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              setOpen(false);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img
              src={Logo}
              className="w-40"
              alt="Logo"
            />
          </Link>

          {/* =========================
              DESKTOP MENU
          ========================= */}

          <div className="hidden md:flex items-center gap-8">

            {/* Home */}
            <Link
              to="/"
              className={`transition font-medium ${
                pathname === "/"
                  ? "text-pink-600"
                  : "text-gray-600 hover:text-pink-500"
              }`}
            >
              Home
            </Link>

            {/* Services */}
            <button
              onClick={() => handleSectionClick("services")}
              className="transition font-medium text-gray-600 hover:text-pink-500 cursor-pointer"
            >
              Services
            </button>

            {/* Resources */}
            <button
              onClick={() => handleSectionClick("resources")}
              className="transition font-medium text-gray-600 hover:text-pink-500 cursor-pointer"
            >
              Resources
            </button>

            {/* Blogs */}
            <Link
              to="/blogs"
              className={`transition font-medium ${
                pathname === "/blogs"
                  ? "text-pink-600"
                  : "text-gray-600 hover:text-pink-500"
              }`}
            >
              Blogs
            </Link>

            {/* Contact */}
            <button
              onClick={() => handleSectionClick("contact")}
              className="transition font-medium text-gray-600 hover:text-pink-500 cursor-pointer"
            >
              Contact
            </button>

          </div>

          {/* =========================
              DESKTOP BUTTON
          ========================= */}

          <div className="hidden md:block">
            <button
              onClick={() => handleSectionClick("contact")}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-semibold shadow-lg hover:scale-105 duration-300 flex items-center gap-2"
            >
              Let's Talk
              <ArrowRight size={18} />
            </button>
          </div>

          {/* =========================
              MOBILE BUTTON
          ========================= */}

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-gray-700 hover:text-pink-500 transition"
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* =========================
          MOBILE OVERLAY
      ========================= */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* =========================
          MOBILE SIDEBAR
      ========================= */}

      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-white z-50 shadow-2xl transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        {/* Sidebar Header */}

        <div className="flex items-center justify-between border-b border-gray-100 px-6 h-20">

          <Link
            to="/"
            onClick={() => setOpen(false)}
          >
            <img
              src={Logo}
              className="w-36"
              alt="Logo"
            />
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-full hover:bg-pink-50 text-gray-600 hover:text-pink-500 flex items-center justify-center transition"
          >
            <X size={22} />
          </button>

        </div>

        {/* =========================
            MOBILE MENU
        ========================= */}

        <div className="p-5 space-y-2">

          {mobileLinks.map((item) => {
            const Icon = item.icon;

            const active =
              item.path && pathname === item.path;

            return (
              <button
                key={item.name}
                onClick={() => handleMobileClick(item)}
                className={`w-full flex items-center gap-4 rounded-xl px-4 py-4 transition text-left ${
                  active
                    ? "bg-pink-500 text-white shadow-lg"
                    : "hover:bg-pink-50 text-gray-700"
                }`}
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.name}
                </span>
              </button>
            );
          })}

        </div>


        {/* =========================
            MOBILE LET'S TALK
        ========================= */}

        <div className="absolute bottom-8 left-5 right-5">

          <button
            onClick={() => handleSectionClick("contact")}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-600 py-4 text-white font-semibold shadow-xl hover:scale-[1.02] transition"
          >
            Let's Talk
            <ArrowRight size={18} />
          </button>

        </div>

      </aside>
    </>
  );
};

export default Navbar;