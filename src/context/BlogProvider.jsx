// src/context/BlogProvider.jsx
import React, { createContext, useContext, useState } from "react";
import { eyeBlogData } from "../data/eyeBlogData"; // your data file

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(eyeBlogData);
  const [selectedBlog, setSelectedBlog] = useState(null); // for "Read More"

  const selectBlog = (id) => {
    const blog = blogs.find((b) => b.id === id);
    setSelectedBlog(blog);
  };

  const clearSelection = () => setSelectedBlog(null);

  return (
    <BlogContext.Provider
      value={{ blogs, selectedBlog, selectBlog, clearSelection }}
    >
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook for easy use
export const useBlogContext = () => useContext(BlogContext);
