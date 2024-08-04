import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Service from "./pages/Service";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/careers" element={<Careers />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/terms-and-conditions" element={<Terms />}/>
        <Route path="/privacy-policy" element={<Privacy />}/>
        <Route path="/refund_policy" element={<Refund />}/>
      </Routes>
      
    </div>
  );
};

export default App;
