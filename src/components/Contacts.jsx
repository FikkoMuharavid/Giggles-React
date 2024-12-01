import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "/src/css/style.css";
import NavbarEditProff from "/src/components/NavbarEditProff.jsx";
import Headeruser1 from "/src/components/Headeruser1.jsx";
import "/src/css/postUser.css";

function Contacts() {
  const navigate = useNavigate();

  return (
    <div className="avril">
     <NavbarEditProff/>  

{/* Call HeaderUser component */}


      {/* Profile Section */}
      <div className="containerPoto">
        <div className="profile1">
          <img
            src="/src/image/profile.png"
            alt="Profile image of Kylie Jenner"
            style={{ width: "95px" }}
          />
          <div className="profile-info1">
            <div className="profile-name1">
              Kylie Jenner
              <div className="underline1"></div> {/* Garis di bawah nama */}
            </div>
            <div className="additional-text1">Designer</div>
          </div>
        </div>
      </div>

      <Headeruser1 />

      {/* Contact Section */}
      <div className="containerEditPost">
        <div className="contact-section">
          <div className="contact-column">
            <div className="contact-item">
              <img src="/src/image/Twitter.png" alt="Twitter Icon" className="icon" />
              <span>Kylie_Jenner</span>
            </div>
            <div className="contact-item">
              <img src="/src/image/Instagram.png" alt="Instagram Icon" className="icon" />
              <span>Kylie_Jenner</span>
            </div>
            <div className="contact-item">
              <img src="/src/image/LinkedIn.png" alt="LinkedIn Icon" className="icon" />
              <span>Kylie_Jenner</span>
            </div>
          </div>
          <div className="contact-column">
            <div className="contact-item">
              <img src="/src/image/email.png" alt="Email Icon" className="icon" />
              <span>Kyliejenner@gmail.com</span>
            </div>
            <div className="contact-item">
              <img src="/src/image/call (1).png" alt="Phone Icon" className="icon" />
              <span>098209982101</span>
            </div>
            <div className="contact-item">
              <img src="/src/image/lokasi.png" alt="Location Icon" className="icon" />
              <span>Bandung, Indonesia, 5534</span>
            </div>
          </div>
        </div>
      </div><br />
    </div>
  );
}

export default Contacts;
