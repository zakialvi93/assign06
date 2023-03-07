import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Results } from "./components/Results";
import { VideoPlayer } from "./components/VideoPlayer";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";

import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Search" element={<Results />} />
          <Route path="Video/:id" element={<VideoPlayer />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <VideoApp />
  <App />
);
