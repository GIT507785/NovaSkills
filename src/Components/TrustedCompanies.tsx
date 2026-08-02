import { RiSlackFill } from "react-icons/ri";
import microsoftLogo from "../assets/micro.png";
import prudentialLogo from "../assets/prudiential.png";

const companies = [
  {
    name: "Slack",
    logo: <RiSlackFill className="text-3xl sm:text-4xl text-gray-400" />,
  },
  {
    name: "Prudential",
    logo: (
      <img
        src={prudentialLogo}
        alt="Prudential"
        className="h-8 sm:h-10 object-contain"
      />
    ),
  },
  {
    name: "Microsoft",
    logo: (
      <img
        src={microsoftLogo}
        alt="Microsoft"
        className="h-7 sm:h-8 object-contain"
      />
    ),
  },
  {
    logo: (
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-400">
        zo<span className="tracking-tight">ov</span>er
      </h2>
    ),
    name: "",
  },
];

const TrustedCompanies = () => {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-6 sm:py-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center"
            >
              {company.logo}

              {company.name && (
                <h2 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-gray-400">
                  {company.name}
                </h2>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;