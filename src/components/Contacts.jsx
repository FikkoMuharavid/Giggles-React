import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "/src/css/style.css";
import "/src/css/navbar.css";
import "/src/css/postUser.css";

function Contacts() {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <div className="navMenu">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "menuActive" : "menuNonActive"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "menuActive" : "menuNonActive"
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive ? "menuActive" : "menuNonActive"
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "menuActive" : "menuNonActive"
            }
          >
            About Us
          </NavLink>
        </div>

        <div className="navGiggle">
          <div className="giggle">Giggle’s</div>
        </div>

        {/* Button Edit */}
        <div className="navRight">
          <button className="signUp" onClick={() => navigate("/EditProfile")}>
            Edit
          </button>
        </div>
      </nav>

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

      <div className="header">
        <div className="containerHeader">
          <NavLink
            to="/Post"
            className={({ isActive }) =>
              isActive ? "header-item active" : "header-item"
            }
          >
            Post
          </NavLink>
          <NavLink
            to="/Collection"
            className={({ isActive }) =>
              isActive ? "header-item active" : "header-item"
            }
          >
            Collection
          </NavLink>
          <NavLink
            to="/Stars"
            className={({ isActive }) =>
              isActive ? "header-item active" : "header-item"
            }
          >
            Stars
          </NavLink>
          <NavLink
            to="/Contacts"
            className={({ isActive }) =>
              isActive ? "header-item active" : "header-item"
            }
          >
            Contacts
          </NavLink>
        </div>
        <hr
          style={{ margin: "0 2%", marginTop: "-0.5%", borderWidth: "2px" }}
        />
      </div>

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
      </div>
    </div>
  );
}

export default Contacts;
