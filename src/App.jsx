import React from "react";
import Login from "./pages/Auth-Login.jsx";
import HomeGuest from "./pages/HomeGuest.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.jsx";
import Register1 from "./pages/Auth-Register1.jsx";
import Gallery from "./pages/Gallery.jsx";
import GalleryDetail from "./pages/GalleryDetail.jsx";
import Jobs from "./pages/Jobs";
import JobsDetail from "./pages/JobsDetail";
import JobsByCategory from "./pages/JobsByCategory";
import Register2 from "./pages/Auth-Register2.jsx";
import ForgotPasw1 from "./pages/Auth-ForgotPasw1.jsx";
import ForgotPasw2 from "./pages/Auth-ForgotPasw2.jsx";
import ForgotPasw3 from "./pages/Auth-ForgotPasw3.jsx";
import Notification from "./pages/Notification.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import PostCreation from "./pages/User-PostCreation.jsx";
<<<<<<< HEAD
import EditProfile from "./components/EditProfile"; 
import SocialProfile from "./components/SocialProfile";
import Resume from "./components/Resume";
import WorkSpace from "./components/WorkSpace";
=======
>>>>>>> db0f22c5dcedfe89a00ec38eac49f4fed6653963

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register1" element={<Register1 />} />
        <Route path="/register2" element={<Register2 />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/forgotpasw1" element={<ForgotPasw1 />} />
        <Route path="/forgotpasw2" element={<ForgotPasw2 />} />
        <Route path="/forgotpasw3" element={<ForgotPasw3 />} />
        <Route path="/homeguest" element={<HomeGuest />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobsDetail />} />
        <Route path="/jobs/category/:category" element={<JobsByCategory />} />
        <Route path="/gallery/:id" element={<GalleryDetail />} />
        <Route path="/postcreation" element={<PostCreation />} />
<<<<<<< HEAD
        <Route path="/EditProfile" element={<EditProfile />} />
      <Route path="/SocialProfile" element={<SocialProfile />} />
      <Route path="/Resume" element={<Resume/>} />
      <Route path="/WorkSpace" element={<WorkSpace/>} />

=======
>>>>>>> db0f22c5dcedfe89a00ec38eac49f4fed6653963
      </Routes>
    </BrowserRouter>
  );
}

export default App;
