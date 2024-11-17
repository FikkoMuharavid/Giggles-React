import React from "react";
import Login from "./pages/Login.jsx";
import HomeGuest from "./pages/HomeGuest.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.jsx";
import Register1 from "./pages/Register1.jsx";
import Galery from "./pages/Galery";
import Jobs from "./pages/Jobs";
import JobsDetail from "./pages/JobsDetail";
import JobsByCategory from "./pages/JobsByCategory";
import GalleryDetail from "./pages/GaleryDetail";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register1" element={<Register1 />} />
        <Route path="/homeguest" element={<HomeGuest />} />
        <Route path="/gallery" element={<Galery />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<JobsDetail />} />
            <Route
              path="/jobs/category/:category"
              element={<JobsByCategory />}
            />
            <Route path="/gallery/:id" element={<GalleryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
