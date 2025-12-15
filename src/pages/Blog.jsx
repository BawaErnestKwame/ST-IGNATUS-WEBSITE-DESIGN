import React from "react";
import hero from "../assets/hero4.jpg";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useBlogContext } from "../context/BlogProvider";
import service from '../assets/blog2.jpg'
import contact from '../assets/blog1.jpg'

const Blog = () => {
  const { blogs, selectedBlogId, selectBlog } = useBlogContext();

  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full h-[40vh] md:h-[50vh] flex items-center px-4 md:px-8 lg:px-24"
        style={{
          backgroundImage: `linear-gradient(to right, #04207AFF 35%,#05207A45), url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="text-white text-5xl md:text-8xl font-bold">Blog List</h1>
          <div className="flex items-center gap-1 text-white">
            <Link
              to="/"
              className="flex items-center gap-1 hover:underline underline-offset-4 hover:text-orange-500 transition-all duration-500 text-2xl"
              style={{
                fontFamily: "Smooch Sans"
              }}
            >
              Home
            </Link>
            <ArrowForwardIosIcon sx={{ fontSize: "16px", fontWeight: "bold", color:"white" }} />
            <span className="text-2xl text-orange-500">Blog</span>
          </div>
        </div>
      </div>
      {/* Blog List */}
      <div className="flex flex-col lg:flex-row px-4 md:px-8 lg:px-32 py-8 gap-20 ">
      <div className=" grid grid-cols-1 gap-6 w-[98%]">
        {blogs.map((blog) => {
          const isOpen = selectedBlogId === blog.id;
          return (
            <div
              key={blog.id}
              className=" p-4 shadow hover:shadow-lg transition-all duration-300"
            >
              <div className=" flex gap-4">
                <img src={blog.image} alt="" className="w-28 h-28 object-cover rounded-lg"/>
            
              <div className="">
                  <div className="items-center gap-4">
                
                <div>
                  <h2 className="text-xl font-bold">{blog.title}</h2>
                  <p className="text-gray-600">{blog.excerpt}</p>
                  <button
                    onClick={() => selectBlog(blog.id)}
                    className="mt-2 text-blue-500 hover:underline"
                  >
                    {isOpen ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>

              {/* Accordion content */}
              {isOpen && (
                <div className="mt-4 border-t pt-4 text-gray-700">
                  <p>{blog.content}</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Author: {blog.author} | Category: {blog.category} | {blog.readTime}
                  </p>
                </div>
              )}

              </div>
              </div>
            
            </div>
          );
        })}
      </div>

      {/* right-side */}

<div className="flex flex-col gap-6 w-full lg:w-2/3">
  <div className="relative w-full lg:h-[50vh] rounded-2xl overflow-hidden group">
    {/* Image */}
    <img
      src={service}
      alt=""
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 bg-opacity-40 rounded-2xl transition duration-500 group-hover:bg-opacity-60"></div>

    {/* Text */}
    <div className="absolute top-1/3 left-10 md:left-16 lg:left-40 text-white transition duration-500 group-hover:translate-y-[-10px]">
      <h1 className="text-3xl lg:text-5xl font-bold">
        All Eye<br />Care Service
      </h1>
      <Link to='/services'>
      <button className="cursor-pointer bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors mt-6">
        Read More
      </button>
      </Link>
    </div>
  </div>

  {/* contact-link */}
  <div className="relative w-full h-[50vh] rounded-2xl overflow-hidden group">
    {/* Image */}
    <img
      src={contact}
      alt=""
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 bg-opacity-40 rounded-2xl transition duration-500 group-hover:bg-opacity-60"></div>

    {/* Text */}
    <div className="absolute top-1/3 left-10 md:left-16 lg:left-40 text-white transition duration-500 group-hover:translate-y-[-10px]">
      <h1 className="text-3xl lg:text-5xl font-bold">
        Keep In<br /> Touch With Us
      </h1>
      <Link to='/contact'>
      <button className="cursor-pointer bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors mt-6">
        Contact Us
      </button>
      </Link>
    </div>
  </div>
</div>


      </div>
    </>
  );
};

export default Blog;
