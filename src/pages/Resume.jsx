import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "/src/css/style.css";
import "/src/css/navbar.css";
import "/src/css/EditProf.css";

function Resume() {
  const [resume, setResume] = useState(null);

  // Dropdown toggle function
  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdownMenu");
    if (dropdown) {
      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const dropdown = document.getElementById("dropdownMenu");
      if (
        dropdown &&
        dropdown.style.display === "block" &&
        !event.target.matches(".profile-icon")
      ) {
        dropdown.style.display = "none";
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleFileUpload = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <div className="navMenu">
          <NavLink to="/home" activeClassName="menuActive" className="menuNonActive">
            Home
          </NavLink>
          <NavLink to="/gallery" activeClassName="menuActive" className="menuNonActive">
            Gallery
          </NavLink>
          <NavLink to="/jobs" activeClassName="menuActive" className="menuNonActive">
            Jobs
          </NavLink>
          <NavLink to="/about" activeClassName="menuActive" className="menuNonActive">
            About Us
          </NavLink>
        </div>

        <div className="navGiggle">
          <div className="giggle">Giggle’s</div>
        </div>

        <div className="navRight">
          <div className="notification">
            <NavLink to="/notification">
              <img
                src="/src/image/icnNotification.png"
                alt="Notification Icon"
                style={{ width: "30px" }}
              />
            </NavLink>
          </div>
          <div className="profile">
            <img
              src="/src/image/profile.png"
              className="profile-icon"
              alt="Profile Icon"
              style={{ width: "75px", cursor: "pointer" }}
              onClick={toggleDropdown}
            />
            <div
              className="dropdown-menu"
              id="dropdownMenu"
              style={{ zIndex: 10000, display: "none" }}
              onClick={(e) => e.stopPropagation()}
            >
              <NavLink to="/profile" className="dropdown-item">
                <span className="bi bi-person"></span>
                <p>Profile</p>
              </NavLink>
              <NavLink to="/signout" className="dropdown-item">
                <span className="bi bi-box-arrow-right"></span>
                <p>Sign Out</p>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="header">
        <div className="containerHeader">
          <NavLink to="/EditProfile" activeClassName="active">
            <div className="header-item">Edit Profile</div>
          </NavLink>
          <NavLink to="/SocialProfile" activeClassName="active">
            <div className="header-item">Social Profile</div>
          </NavLink>
          <NavLink to="/Resume" activeClassName="active">
            <div className="header-item">Resume</div>
          </NavLink>
          <NavLink to="/WorkSpace" activeClassName="active">
            <div className="header-item">Work Space</div>
          </NavLink>
        </div>
        <hr
          style={{ margin: "0 2%", marginTop: "-0.5%", borderWidth: "2px" }}
        />
      </div>

      <div className="containerEditProfileup2">
        <div className="containerEdit1">
          <div className="new-profile1">
            <h3>Resume</h3>
            <div className="divider"></div>
            <div className="form-grid">
              <div className="form-group">
                <h3>Email</h3>
                <input type="text" placeholder="Enter your Email" />
                <h3>Resume</h3>

                {/* File upload button */}
                <input
                  type="file"
                  onChange={handleFileUpload}
                  id="resume-upload"
                  style={{ display: "none" }}
                />
                <label htmlFor="resume-upload">
                  <button className="btnSecondary" style={{ marginTop: "10px" }}>
                    Upload Resume
                  </button>
                </label>
                {resume && <p>File selected: {resume.name}</p>}
              </div>
            </div>
            <button className="buttonSave">Save Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
