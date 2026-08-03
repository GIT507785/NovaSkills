import  { useEffect, useState, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import moment from "moment";
import { Clock } from "lucide-react";
import { VITE_BACKEND_URL } from "../Api/api";
import BlogCard from "./BlogCard";

interface Blog {
  _id: string;
  title: string;
  category: string;
  image: string;
  createdAt: string;
  description: string;
  isPublished: boolean;
}


const LatestBlogSlider = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef<number | null>(null);

  /* ================= FETCH BLOGS ================= */
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${VITE_BACKEND_URL}/api/blog/all`)
  

        if (!res.data?.success) {
          toast.error(res.data?.message || "Failed to load blogs");
          return;
        }
        const latestFive = [...res.data.blogs]
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 5);
        setBlogs(latestFive as any);
        setCurrent(0); // reset index safely
      } catch (err) {
        toast.error("API error while fetching blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    if (blogs.length === 0) return;

    sliderRef.current = setInterval(() => {
      setCurrent((prev) =>
        prev === blogs.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(sliderRef.current as any);
  }, [blogs.length]);

  /* ================= SAFE GUARDS ================= */
  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading latest blogs...
      </div>
    );
  }

  if (!blogs.length) return (
      <div className="py-20 text-center text-gray-500">
         Blog Not Found 🙄
      </div>
    );

  /* ================= UI ================= */
  return (
    <>
    <section  className="relative w-full py-16 bg-gray-50">
      <h2 className="text-4xl font-extralight text-center mb-12 text-gray-800">
        Latest_<span>Blogs</span> 
      </h2>

      <div className="relative overflow-hidden max-w-6xl mx-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
          >
          {blogs.map((blog) => (
            <div key={blog._id} className="min-w-full px-4">
              <Link  to={`/blog/${blog._id}`} className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 sm:h-100 rounded-md    object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase bg-indigo-600 px-3 py-1 rounded">
                    {blog.category}
                  </span>
   
                      <p className="flex mt-1 gap-2"> <Clock className="size-4 mt-1 text-pink-600"/> {moment(blog.createdAt).format('MMMM D , YYYY')} </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {blog.title}
                  </h3>

                  {/* <p
                    className="mt-2 text-sm opacity-90 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: blog.description.slice(0, 120),
                    }}
                  /> */}

                  <Link
                    to={`/blog/${blog._id}`}
                    className="inline-block mt-4 text-indigo-300 hover:text-indigo-500"
                    >
                    Read More →
                  </Link>
           
                  <div className="flex items-center mt-2 sm:mt-0 justify-center gap-2">
                   {blogs.map((_,index)=>{
                    return(
                      <button onClick={()=>setCurrent(index)} className={`h-3 w-3 transition-all duration-300 rounded-full
                        ${index === current ? 'bg-blue-400' : 'borer-t border-b border-gray-300 border rounded-full'} `}/>     
                        )
                   })}
                  </div>


                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Arrows */}
     
      </div>
    </section>
         
         <div className="text-center max-w-2xl mx-auto mb-12">
  <h2 className="text-4xl font-bold text-gray-900">
    Latest Articles & Insights
  </h2>

  <p className="mt-4 text-gray-600 text-lg">
    Stay informed with expert tips, industry trends, and practical guides to
    help you grow your skills and stay ahead in today's digital world.
  </p>
</div>

      <div className="grid md:grid-cols-3 gap-6 sm:px-10">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>    
 
        </>
  );
};

export default LatestBlogSlider;
