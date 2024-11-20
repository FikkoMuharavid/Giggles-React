import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "/src/css/style.css";
import "/src/css/navbar.css";
import "/src/css/EditProf.css";

function WorkSpace() {
  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdownMenu");
    if (dropdown) {
      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
    }
  };

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

  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <div className="navMenu">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "menuActive" : "menuNonActive")}
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "menuActive" : "menuNonActive")}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) => (isActive ? "menuActive" : "menuNonActive")}
          >
            Jobs
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "menuActive" : "menuNonActive")}
          >
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
          <NavLink
            to="/EditProfile"
            className={({ isActive }) => (isActive ? "header-item active" : "header-item")}
          >
            Edit Profile
          </NavLink>
          <NavLink
            to="/SocialProfile"
            className={({ isActive }) => (isActive ? "header-item active" : "header-item")}
          >
            Social Profile
          </NavLink>
          <NavLink
            to="/Resume"
            className={({ isActive }) => (isActive ? "header-item active" : "header-item")}
          >
            Resume
          </NavLink>
          <NavLink
            to="/WorkSpace"
            className={({ isActive }) => (isActive ? "header-item active" : "header-item")}
          >
            Work Space
          </NavLink>
        </div>
        <hr style={{ margin: "0 2%", marginTop: "-0.5%", borderWidth: "2px" }} />
      </div>

      {/* Work Preferences Section */}
      <div className="containerEditProfileup3">
        <div className="containerEdit2">
          <h3>Work Preferences</h3>
          <div className="divider"></div>
          <div className="form-grid">
            <div className="form-group">
              <h3>Freelance</h3>
              <div className="options-group">
                <label className="custom-radio">
                  <input type="radio" name="job-type" value="freelance" />
                  <span className="label-text">Freelance</span>
                  <span className="radio-circle"></span>
                </label>
                <label className="custom-radio">
                  <input type="radio" name="job-type" value="fulltime" />
                  <span className="label-text">Full Time</span>
                  <span className="radio-circle"></span>
                </label>
              </div>
              <h3>Resume</h3>
              <input type="text" placeholder="Upload or link your resume" />
            </div>
          </div>
          <button className="buttonSave">Save Profile</button>
        </div>
      </div>
    </div>
  );
}

export default WorkSpace;
