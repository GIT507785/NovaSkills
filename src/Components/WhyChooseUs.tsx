import React from "react";
import { CheckCircle2 } from "lucide-react";

import heroBg from "../assets/chooseus.png";
import imag1 from "../assets/service1.png";
import imag2 from "../assets/service2.png";
import imag3 from "../assets/service3.png";
import imag4 from "../assets/service4.png";
import imag5 from "../assets/service5.png";

const WhyChooseUs = () => {
  const [showAll, setShowAll] = React.useState(false);

  const images = [imag1, imag2, imag3, imag4, imag5];

  return (
    <section id="resources" className="py-12 sm:py-16 lg:py-20 bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl min-h-[500px] lg:min-h-[620px]"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#232647]/40"></div>

          <div className="relative z-10 flex items-center justify-center lg:justify-end min-h-[500px] lg:min-h-[620px]">
            <div className="w-full lg:w-[45%] px-6 sm:px-10 lg:px-14 py-12 text-center lg:text-left">
              <span className="text-[#FF8A1E] uppercase tracking-[3px] text-xs sm:text-sm font-semibold">
                WHY CHOOSE US
              </span>

              <h2 className="mt-4 text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Take on any Challenge
                <br />
                of the Digital World
              </h2>

              <div className="mt-8 space-y-5 flex flex-col items-center lg:items-start">
                {[
                  "Corporate Financial Advisory",
                  "Development of Financial Models",
                  "Deal Structuring",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <CheckCircle2
                      className="text-white fill-white"
                      size={18}
                    />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 px-8 py-3 rounded-full bg-[#FF5C8A] hover:bg-[#ff4679] transition duration-300 text-white font-semibold shadow-lg shadow-pink-500/30">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Always Visible Images */}
          {images.slice(0, 5).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Service ${index + 1}`}
              className="w-full h-56 sm:h-64 lg:h-72 object-cover rounded-2xl shadow-md hover:scale-105 transition duration-300"
            />
          ))}

          {/* Extra Images */}
          {showAll &&
            images.slice(0, 2).map((img, index) => (
              <img
                key={`extra-${index}`}
                src={img}
                alt={`Extra ${index + 1}`}
                className="w-full h-56 sm:h-64  lg:h-72 object-cover rounded-2xl shadow-md hover:scale-105 transition duration-300"
              />
            ))}

          {/* Project Card */}
          <div className="flex flex-col items-center justify-center text-center bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-orange-500 text-sm sm:text-base font-semibold uppercase tracking-wider">
              Projects
            </p>

            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Selected Works
              <br />
              From Us
            </h2>

            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-6 px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold transition duration-300 shadow-lg shadow-pink-500/30"
            >
              {showAll ? "Show Less" : "View All Projects"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;