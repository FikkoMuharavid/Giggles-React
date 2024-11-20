import React from "react";
import "/src/css/style.css";
import "/src/css/navbar.css";
import "/src/css/EditProf.css";
import { NavLink } from 'react-router-dom'; // Import NavLink



function EditProfile() {
  // Dropdown toggle function
  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdownMenu");
    if (dropdown) {
      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
    }
  };

  // Close the dropdown when clicking outside
  window.onclick = (event) => {
    const dropdown = document.getElementById("dropdownMenu");
    if (
      dropdown &&
      dropdown.style.display === "block" &&
      !event.target.matches(".profile-icon")
    ) {
      dropdown.style.display = "none";
    }
  };

  return (
    <div>
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
            <a href="Notification.html">
              <img
                src="/src/image/icnNotification.png"
                alt=""
                style={{ width: "30px" }}
              />
            </a>
          </div>
          <div className="profile">
            <img
              src="/src/image/profile.png"
              className="profile-icon"
              alt=""
              style={{ width: "75px" }}
              onClick={toggleDropdown}
            />
            <div
              className="dropdown-menu"
              id="dropdownMenu"
              style={{ zIndex: 10000 }}
              onClick={(e) => e.stopPropagation()}
            >
              <a href="user-post.html" className="dropdown-item">
                <span className="bi bi-person"></span>
                <p>Profile</p>
              </a>
              <a href="#" className="dropdown-item">
                <span className="bi bi-box-arrow-right"></span>
                <p>Sign Out</p>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div>
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
     
    </div>

      <div className="containerEditProfile2">
        <div className="containerEditwork">
          <div className="changephoto">
            <div className="profile-container">
              <img
                src="/src/image/profile.png"
                alt=""
                style={{ width: "95px" }}
              />
              <div className="profile">
                <div className="profile-name">
                  Kylie Jenner
                  <div className="underline"></div>
                </div>
                <div className="additional-text">Designer</div>
              </div>
            </div>
            <button className="change" style={{ marginLeft: "3%" }}>
              Change Photo
            </button>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <h3>Name</h3>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <h3>Location</h3>
              <input type="text" placeholder="Enter your location" />
            </div>
            <div className="form-group">
              <h3>Bio</h3>
              <input type="text" placeholder="Enter your bio" />
            </div>
          </div>

          <div className="containerEditwork">
            <div className="containerEdit">
              <h3>Work History & Education</h3>
              <div className="divider"></div>
              <div className="form-grid-edit">
                <div className="form-group-edit work-history">
                  <h3>Additional Work History</h3>
                  <div className="two-column">
                    <input type="text" placeholder="Position" />
                    <span className="at-text">at</span>
                    <input type="text" placeholder="Company" />
                  </div>
                  <div className="two-column">
                    <input type="text" placeholder="Start Year" />
                    <span className="at-text">to</span>
                    <input type="text" placeholder="End Year" />
                  </div>
                  <p className="remove-btn1">Remove Education</p>
                </div>

                <div className="form-group-edit education">
                  <h3>Additional Education</h3>
                  <div className="three-column">
                    <input type="text" placeholder="Degree" />
                    <span className="at-text">at</span>
                    <input type="text" placeholder="School / University" />
                    <input type="text" placeholder="Year" />
                  </div>
                  <p className="remove-btn1">Remove Education</p>
                </div>
              </div>
              <button className="buttonSave1">Save Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;