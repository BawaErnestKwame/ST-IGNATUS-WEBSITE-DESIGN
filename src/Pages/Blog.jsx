import React from "react";
import hero from "../assets/hero4.jpg";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useBlogContext } from "../context/BlogProvider"; // ✅ now available

const Blog = () => {
  const { blogs, selectBlog, selectedBlog, clearSelection } = useBlogContext();

  return (
    <>
      <div
        className="w-full h-[50vh] flex items-center px-4 md:px-8 lg:px-24"
        style={{
          backgroundImage: `linear-gradient(to right, #04207AFF 35%,#05207A45), url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="text-white text-2xl md:text-6xl">About Us</h1>
          <div className="flex items-center gap-1 text-white">
            <Link
              to="/"
              className="flex items-center gap-1 hover:underline underline-offset-4 hover:text-orange-500 transition-all duration-500 text-2xl"
            >
              Home
            </Link>
            <ArrowForwardIosIcon sx={{ fontSize: "16px", fontWeight: "bold" }} />
            <span className="text-2xl">Blog</span>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-24 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-gray-600">{blog.excerpt}</p>
            <button
              onClick={() => selectBlog(blog.id)}
              className="mt-2 text-blue-500 hover:underline"
            >
              Read More
            </button>
          </div>
        ))}

        {selectedBlog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
              <button
                onClick={clearSelection}
                className="absolute top-2 right-2 text-red-500 font-bold"
              >
                X
              </button>
              <h2 className="text-2xl font-bold mb-2">{selectedBlog.title}</h2>
              <p className="text-gray-700">{selectedBlog.content}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
