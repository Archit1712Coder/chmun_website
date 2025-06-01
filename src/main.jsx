import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Committees from "./pages/Committees";
import Register from "./pages/Register";
import "./index.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white font-sans flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
