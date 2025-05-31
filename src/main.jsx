import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
// import About from "./pages/About";
import Committees from "./pages/Committees";
// import Register from './pages/Register';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white font-sans">
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/committees" element={<Committees />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
