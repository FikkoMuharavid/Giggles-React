import React from "react";
import Login from "./pages/Auth-Login.jsx";
import HomeGuest from "./pages/HomeGuest.jsx";
import HomeUser from "./pages/HomeUser.jsx";
import HomeCompany from "./pages/HomeCompany.jsx";
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



import CompanyAbout from "./pages/Company-About.jsx";
import CompanyContact from "./pages/Company-Contact.jsx";
import CompanyJobs from "./pages/Company-JobList.jsx";
import CompanyEditAbout from "./pages/Company-EditAbout.jsx";
import CompanyEditPostJob from "./pages/Company-EditPostJob.jsx";
import CompanyEditProfile from "./pages/Company-EditProfile.jsx";
import EditProfile from "./pages/EditProfile"; 
import SocialProfile from "./pages/SocialProfile";
import Resume from "./pages/Resume";
import WorkSpace from "./pages/WorkSpace";
import Post from "./components/Post"; 
import Collection from "./components/Collection";
import Stars from "./components/Stars";
import Contacts from "./components/Contacts";



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
        <Route path="/homeuser" element={<HomeUser />} />
        <Route path="/homecompany" element={<HomeCompany />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobsDetail />} />
        <Route path="/jobs/category/:category" element={<JobsByCategory />} />
        <Route path="/gallery/:id" element={<GalleryDetail />} />
        <Route path="/postcreation" element={<PostCreation />} />
        <Route path="/companyabout" element={<CompanyAbout />} />
        <Route path="/companycontact" element={<CompanyContact />} />
        <Route path="/companyjobs" element={<CompanyJobs />} />
        <Route path="/company-edit-about" element={<CompanyEditAbout />} />
        <Route path="/company-edit-postjob" element={<CompanyEditPostJob />} />
        <Route path="/company-edit-profile" element={<CompanyEditProfile />} />
        <Route path="/EditProfile" element={<EditProfile />} />
      <Route path="/SocialProfile" element={<SocialProfile />} />
      <Route path="/Resume" element={<Resume/>} />
      <Route path="/WorkSpace" element={<WorkSpace/>} />
      <Route path="/Post" element={<Post />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Stars" element={<Stars />} />
        <Route path="/Contacts" element={<Contacts />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
