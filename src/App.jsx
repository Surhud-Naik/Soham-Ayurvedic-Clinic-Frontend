import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="relative pt-16 min-h-screen bg-[url('/1508.jpg')] bg-cover bg-[center_60px] bg-no-repeat bg-fixed">
        {/* Overlay covers the entire viewport and scrolls with content */}
        <div className="fixed inset-0 bg-white/30 z-0 pointer-events-none"></div>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
