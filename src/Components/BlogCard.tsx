import { Clock } from "lucide-react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

interface Blog {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  createdAt: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const navigate = useNavigate();

  const { _id, title, description, category, image, createdAt } = blog;

  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate(`/blog/${_id}`);
      }}
      className="w-full max-w-sm sm:max-w-md md:max-w-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer group"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="flex gap-3 sm:flex-row flex-col">
          <span className="flex items-center justify-center mb-3 px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded-full w-fit">
            {category}
          </span>

          <p className="text-sm flex items-center text-gray-600 gap-2">
            <Clock className="text-pink-400 size-4" />
            {moment(createdAt).format("MMMM D, YYYY")}
          </p>
        </div>

        <h5 className="mb-2 text-sm sm:text-base font-semibold text-gray-800 line-clamp-2">
          {title}
        </h5>

        <p
          className="mb-4 text-xs sm:text-sm text-blue-800 hover:text-red-500 line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: description.slice(0, 120),
          }}
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/blog/${_id}`);
          }}
          className="text-xs sm:text-sm px-4 py-2 border border-amber-500 text-amber-600 rounded-full hover:bg-amber-500 hover:text-white transition"
        >
          Continue Reading
        </button>
      </div>
    </div>
  );
};

export default BlogCard;