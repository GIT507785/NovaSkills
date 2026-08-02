import { CalendarDays } from "lucide-react";
import girlImage from "../assets/contact.png";

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:px-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="relative flex justify-center">
             
  {/* Pink Glow */}

  <div className="absolute -top-6 left-10 w-64 h-64 rounded-full bg-pink-300/30 blur-[90px]"></div>
  {/* Orange Blob */}
  <div className="absolute top-14 right-8 w-52 h-52 rounded-full bg-orange-400/30 blur-[70px]"></div>

  {/* Blue Blob */}
  <div className="absolute bottom-10 left-8 w-72 h-56 rounded-full bg-teal-500/25 blur-[70px]"></div>

  {/* Small Pink Circle */}
  <div className="absolute bottom-24 right-12 w-8 h-8 rounded-full border-4 border-pink-400"></div>

  {/* Small Orange Circle */}
  <div className="absolute top-24 left-16 w-4 h-4 rounded-full bg-orange-500"></div>
            <img
              src={girlImage}
              alt="Contact"
              className="w-full max-w-[520px] object-contain"
            />
  {/* <div className="absolute bottom-10 left-8 w-72 h-56 rounded-full  blur-[70px]"></div> */}

          </div>

          {/* RIGHT */}
          <div>
            <p className="uppercase tracking-[3px] text-orange-500 text-sm font-semibold">
              Contact Us
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#232647]">
              Let's Collaborate Now!
            </h2>

            <form className="mt-10 space-y-6">

              <div>
                <label className="block mb-2 font-medium text-[#232647]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Input Your Name"
                  className="w-full h-14 px-5 rounded-lg bg-pink-50 border border-transparent focus:border-pink-500 outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block mb-2 font-medium text-[#232647]">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Input Your Email"
                    className="w-full h-14 px-5 rounded-lg bg-pink-50 border border-transparent focus:border-pink-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-[#232647]">
                    Date
                  </label>

                  <div className="relative">
                    <CalendarDays
                      size={18}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-500"
                    />

                    <input
                      type="date"
                      className="w-full h-14 px-5 rounded-lg bg-pink-50 border border-transparent focus:border-pink-500 outline-none"
                    />
                  </div>
                </div>

              </div>

              <div>
                <label className="block mb-2 font-medium text-[#232647]">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write Message..."
                  className="w-full p-5 rounded-lg bg-pink-50 border border-transparent focus:border-pink-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-10 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg shadow-pink-500/30 transition-all duration-300"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact; 