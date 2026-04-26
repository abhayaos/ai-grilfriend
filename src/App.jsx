import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Models from "./pages/Models";
import TrainAI from "./pages/TrainAi";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/train" element={<TrainAI />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;