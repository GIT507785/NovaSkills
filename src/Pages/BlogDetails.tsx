import { Loader2 } from "lucide-react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import toast from "react-hot-toast";
import { VITE_BACKEND_URL } from "../Api/api";
import axios from "axios";

interface Blog {
 _id: string;
 authorName: string;
 title: string;
 description: string;
 category: string;
 image: string;
 createdAt: string;
 updatedAt: string;
 __v: number;
 isPublished: boolean;
 subTitle: string;
} 


const BlogDetails = () => {
  const { id } = useParams();

  // const blog = blog_data.find((item) => item._id === id);
  // console.log(blog?.description)

const [blog, setBlog] = useState<Blog | null>(null);
const [comments, setComments] = useState<any[]>([]);
const [loading, setLoading] = useState(true);
const [submitting, setSubmitting] = useState(false);

const [name, setName] = useState("");
const [content, setContent] = useState("");
 
  const fetchBlogDetails = async () => {
  try {
    setLoading(true);

    const { data } = await axios.get(
      `${VITE_BACKEND_URL}/api/blog/${id}`
    );

    if (data.success) {
      setBlog(data.blog);
    } else {
      toast.error(data.message);
    }
  } catch (error: any) {
    toast.error(error.message);
  } finally {
    setLoading(false);
  }
};

const fetchComments = async () => {
  try {
    const { data } = await axios.post(
      `${VITE_BACKEND_URL}/api/blog/comments` ,{blogid : id} 
    );
     console.log(comments)

    if (data.success) {
      setComments(data.comments);
    } else {
      toast.error(data.message);
    }
  } catch (error: any) {
    toast.error(error.message);
  }
};

  

  const addComment = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    setSubmitting(true);
    console.log("Clicked")
    console.log(comments)

    const { data } = await axios.post(
      `${VITE_BACKEND_URL}/api/blog/add-comment`,
      {
        blog: id,
        name,
        content,
      }
    );

    if (data.success) {
      toast.success(data.message);

      setName("");
      setContent("");

      fetchComments();
    } else {
      toast.error(data.message);
    }
  } catch (error: any) {
    toast.error(error.message);
  } finally {
    setSubmitting(false);
  }
};

   useEffect(()=>{
    fetchBlogDetails()
    fetchComments()
   }
   ,[])

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin text-blue-600 size-10" />
      </div>
    );
  }

  return (
    <div className="relative bg-gray-50 pt-7">
      {/* Background */}
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute top-0 left-0 w-full opacity-60 pointer-events-none -z-10"
      />

      {/* Header */}
      <div className="text-center mt-16 text-gray-600 px-4">
        <p className="text-blue-600 font-medium py-2 tracking-wide">
          Published on: {moment(blog.createdAt).format("MMMM D, YYYY")}
        </p>

        <h1 className="text-3xl sm:text-5xl font-bold max-w-3xl mx-auto text-gray-900 leading-tight">
          {blog.title}
        </h1>

        <h2 className="my-4 max-w-2xl mx-auto text-gray-500 text-lg">
          {blog.subTitle}
        </h2>

        <p className="inline-block py-1 px-5 rounded-full mb-6 text-sm bg-blue-600 text-white shadow-md">
          {blog.authorName}
        </p>
      </div>

      {/* Blog */}
      <div className="mx-5 max-w-4xl md:mx-auto mt-10">
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-3xl shadow-lg w-full h-[450px] object-cover mb-8"
        />

        <div
          className="prose prose-lg max-w-3xl mx-auto text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />

        {/* Comments */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Comments ({comments_data.length})
          </h2>

          {comments_data.length === 0 ? (
            <p className="text-gray-500">No comments yet.</p>
          ) : (
            <div className="space-y-5">
              {comments.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-5 border"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={assets.user_icon}
                      className="w-10 h-10"
                      alt=""
                    />

                    <div>
                      <h3 className="font-semibold">{item.name}</h3>

                      <p className="text-xs text-gray-500">
                        {moment(item.createdAt).fromNow()}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Comment Form */}
        <div className="max-w-2xl mx-auto mt-14">
          <form
            onSubmit={addComment}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-5">Leave a Comment</h2>

            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Write your comment..."
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-40 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition"
            >
              {loading ? "Submitting..." : "Submit Comment"}
            </button>
          </form>
        </div>

        {/* Share */}
        <div className="my-20 text-center">
          <h3 className="font-semibold text-xl mb-5">
            Share this article
          </h3>

          <div className="flex justify-center gap-4">
            <img
              src={assets.facebook_icon}
              className="w-10 cursor-pointer hover:scale-110 transition"
              alt=""
            />

            <img
              src={assets.twitter_icon}
              className="w-10 cursor-pointer hover:scale-110 transition"
              alt=""
            />

            <img
              src={assets.googleplus_icon}
              className="w-10 cursor-pointer hover:scale-110 transition"
              alt=""
            />
          </div>
        </div>
      </div>
    </div> 
  );
};

export default BlogDetails 