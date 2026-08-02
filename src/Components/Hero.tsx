import { ArrowRight,  Verified } from "lucide-react";
import {Link} from 'react-router-dom'
import heroimage from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat
      min-h-screen sm:min-h-[700px] lg:min-h-[850px]"
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex items-center min-h-screen px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-2xl py-20">

          {/* Badge */}
          <div className="flex items-center gap-2 text-orange-500 font-medium">
            <Verified
              className="fill-orange-500 text-white"
              size={20}
            />
            <p className="text-sm sm:text-base">
              Welcome to NovaSkill
            </p>
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
            Reach Your Business
            <br />
            Goals in Record Time
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl">
            Support small businesses and join the nationwide movement
            to encourage commercial support for millions of
            minority-owned businesses helping the world economy.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

            <button
              className="bg-pink-500 hover:bg-pink-600
              text-white font-semibold
              rounded-full px-8 py-3
              w-full sm:w-auto transition cursor-pointer"
            >
              Get Started
            </button>

            <Link to="/blogs"
              className="flex items-center justify-center gap-2
              border border-pink-500
              bg-white hover:bg-pink-50
              rounded-full px-8 py-3
              font-semibold
              w-full sm:w-auto
              transition cursor-pointer"
            >
                Our Blogs
               <ArrowRight size={20} className="mt-1"/>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;