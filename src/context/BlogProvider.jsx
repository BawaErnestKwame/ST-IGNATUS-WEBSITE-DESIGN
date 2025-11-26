// src/context/BlogProvider.jsx
import React, { createContext, useContext, useState } from "react";
import { eyeBlogData } from "../data/eyeBlogData";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs] = useState(eyeBlogData);
  const [selectedBlogId, setSelectedBlogId] = useState(null); // store only ID

  // toggle accordion
  const selectBlog = (id) => {
    if (selectedBlogId === id) {
      setSelectedBlogId(null); // close if already open
    } else {
      setSelectedBlogId(id); // open selected blog
    }
  };

  return (
    <BlogContext.Provider
      value={{ blogs, selectedBlogId, selectBlog }}
    >
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook
export const useBlogContext = () => useContext(BlogContext);
