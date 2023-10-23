import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
