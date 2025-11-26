import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { BlogProvider } from "./context/BlogProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BlogProvider>
      <App />
    </BlogProvider>
  </BrowserRouter>
);
