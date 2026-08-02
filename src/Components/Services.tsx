import {
  BarChart3,
  BadgeDollarSign,
  LineChart,
} from "lucide-react";

const services = [
  {
    title: "Market Forecast",
    description:
      "Leverage agile framework to provide a robust high level synopsis overview.",
    icon: BarChart3,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Fund Raising",
    description:
      "Bring to the table survival strategies to ensure proactive domination.",
    icon: BadgeDollarSign,
    color: "bg-lime-100 text-lime-600",
  },
  {
    title: "Cash Flow",
    description:
      "Grow the holistic world view of disruptive innovation workspace.",
    icon: LineChart,
    color: "bg-pink-100 text-pink-600",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white py-12 sm:py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12 items-start">
          {/* Left Side */}
          <div className="lg:sticky lg:top-24 text-center lg:text-left">
            <p className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold">
              Services
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Our <br className="hidden lg:block" />
              Capabilities
            </h2>

            <p className="mt-5 text-gray-500 text-base leading-7 max-w-md mx-auto lg:mx-0">
              We will bring the breadth of our experience and
              industry knowledge to help you succeed with
              innovative and reliable financial solutions.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.color} group-hover:scale-110 transition`}
                  >
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-gray-500 leading-7 flex-grow">
                    {service.description}
                  </p>

                  {/* Read More */}
                  <button className="mt-6 text-pink-500 font-semibold hover:text-pink-600 transition">
                    Learn More →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;