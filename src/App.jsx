import React from "react";
import Login from "./pages/Login.jsx";
import HomeGuest from "./pages/HomeGuest.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.jsx";
import Register1 from "./pages/Register1.jsx";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register1" element={<Register1 />} />
        <Route path="/homeguest" element={<HomeGuest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
