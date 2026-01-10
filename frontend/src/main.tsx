import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tabs from "./pages/Tabs";
import Videos from "./pages/Videos";
import Blog from "./pages/Blog";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tabs" element={<Tabs />} />
        <Route path="videos" element={<Videos />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
