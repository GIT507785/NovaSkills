import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFF7FA] pt-14 sm:pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-[#232647]">
              Nova <span className="text-pink-500">Skills</span>
            </h2>

            <p className="mt-5 text-gray-600 leading-7 text-sm sm:text-base">
              Helping businesses grow through modern web development,
              UI/UX design, branding, and digital solutions.
            </p>

            <div className="flex gap-3 mt-8">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-pink-500 hover:text-white transition duration-300"
                  >
                    <Icon size={17} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#232647] mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                "Home",
                "About",
                "Services",
                "Projescts",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition"
                  >
                    <ArrowRight size={15} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-[#232647] mb-6">
              Services
            </h3>

            <ul className="space-y-4">
              {[
                "Web Development",
                "UI/UX Design",
                "Mobile Apps",
                "SEO Optimization",
                "Brand Identity",
                "Digital Marketing",
              ].map((item) => (
                <li
                  key={item}
                  className="text-gray-600 hover:text-pink-500 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-[#232647] mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone
                  size={20}
                  className="text-orange-500 mt-1 flex-shrink-0"
                />
                <span className="text-gray-600">
                  +92 3261045424
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={20}
                  className="text-orange-500 mt-1 flex-shrink-0"
                />
                <span className="text-gray-600 break-all">
                  info@novaskills.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-orange-500 mt-1 flex-shrink-0"
                />
                <span className="text-gray-600">
                  street no 4 near paragon school qasim road samundri
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#232647] mb-3">
                Subscribe to our Newsletter
              </p>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-l-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-500"
                />

                <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 rounded-r-full transition">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-pink-200 mt-12 sm:mt-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2026 Nova Skills. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 transition"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 transition"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;