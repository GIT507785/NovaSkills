import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-50 pt-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-[#232647]">
              Nova <span className="text-pink-500">Skills</span>
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              Helping businesses grow through modern web development,
              UI/UX design and digital solutions.
            </p>

            <div className="flex gap-4 mt-8">
              {[
                FaFacebook,
                FaInstagram,
                FaLinkedin,
                FaTwitter,
              ].map((Icon, index) => (
                <div
                  key={index}
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow hover:bg-pink-500 hover:text-white duration-300 cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#232647] mb-6">
              Quick Links
            </h3>

            <div className="space-y-4">
              {[
                "Home",
                "About",
                "Services",
                "Projects",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="flex items-center gap-2 text-gray-600 hover:text-pink-500 duration-300"
                >
                  <ArrowRight size={16} />
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-[#232647] mb-6">
              Services
            </h3>

            <div className="space-y-4">
              {[
                "Web Development",
                "UI/UX Design",
                "Mobile Apps",
                "SEO Optimization",
                "Brand Identity",
                "Digital Marketing",
              ].map((item) => (
                <p
                  key={item}
                  className="text-gray-600 hover:text-pink-500 cursor-pointer duration-300"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-[#232647] mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <Phone className="text-orange-500 mt-1" size={20} />
                <span className="text-gray-600">
                  +92 300 1234567
                </span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-orange-500 mt-1" size={20} />
                <span className="text-gray-600">
                  info@novaskills.com
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-orange-500 mt-1" size={20} />
                <span className="text-gray-600">
                  Lahore, Pakistan
                </span>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-pink-200 mt-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Nova Skills. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-pink-500">
              Privacy Policy
            </a>

            <a href="#" className="text-gray-500 hover:text-pink-500">
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>
      
    </footer>
  );
};

export default Footer;