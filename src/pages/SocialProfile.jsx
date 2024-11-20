import React, { useEffect } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink dari React Router
import "/src/css/style.css";
import "/src/css/navbar.css";
import "/src/css/EditProf.css";

function SocialProfile() {
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
            <a href="Notification.html">
              <img
                src="/src/image/icnNotification.png"
                alt="Notification Icon"
                style={{ width: "30px" }}
              />
            </a>
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

      {/* Header Section */}
      <div className="header">
        <div className="containerHeader">
          <NavLink
            to="/EditProfile"
            className={({ isActive }) =>
              isActive ? "header-item active" : "header-item"
            }
          >
            Edit Profile
          </NavLink>
          <NavLink
            to="/SocialProfile"
            className={({ isActive }) =>
              isActive ? "header-item active" : "header-item"
            }
          >
            Social Profile
          </NavLink>
          <NavLink
            to="/Resume"
            className={({ isActive }) =>
              isActive ? "header-item active" : "header-item"
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/WorkSpace"
            className={({ isActive }) =>
              isActive ? "header-item active" : "header-item"
            }
          >
            Work Space
          </NavLink>
        </div>
        <hr
          style={{ margin: "0 2%", marginTop: "-0.5%", borderWidth: "2px" }}
        />
      </div>

      {/* New Social Profile Section */}
      <div className="containerEditProfileup2">
        <div className="containerEdit3">
          <div className="new-profile">
            <h3>Social Profile</h3>
            <div className="divider"></div>
            <div className="form-grid">
              <div className="form-group">
                <h3>LinkedIn</h3>
                <input
                  type="text"
                  placeholder="Enter your LinkedIn profile"
                  className="inputField"
                />
                <h3>Twitter</h3>
                <input
                  type="text"
                  placeholder="Enter your Twitter handle"
                  className="inputField"
                />
                <h3>Instagram</h3>
                <input
                  type="text"
                  placeholder="Enter your Instagram profile"
                  className="inputField"
                />
              </div>
            </div>
            <button className="buttonSave">Save Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialProfile;
