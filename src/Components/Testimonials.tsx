import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, Bright Solutions",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Nova Skills delivered exactly what we needed. Their team was professional, responsive, and the final website exceeded our expectations.",
  },
  {
    id: 2,
    name: "Michael Anderson",
    role: "Founder, TechNova",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Working with Nova Skills was an amazing experience. The quality of work and attention to detail were outstanding.",
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "From design to development everything was smooth. Highly recommend Nova Skills for professional digital solutions.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-[4px]">
            Testimonials
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#232647] leading-tight">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-gray-500 text-sm sm:text-base leading-7">
            We help businesses grow with modern web solutions,
            innovative strategies, and exceptional customer support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#232647] to-[#2e3365] p-6 sm:p-8 text-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-400 flex flex-col h-full"
            >
              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-pink-500/20 rounded-full blur-3xl"></div>

              {/* Quote */}
              <Quote
                size={42}
                strokeWidth={1.5}
                className="text-orange-400 mb-5"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 leading-7 text-sm sm:text-base flex-grow">
                "{item.review}"
              </p>

              {/* Client */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-orange-400"
                />

                <div>
                  <h4 className="font-semibold text-base sm:text-lg">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}