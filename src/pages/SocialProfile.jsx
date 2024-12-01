import React, { useEffect } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink dari React Router
import "/src/css/style.css";

import "/src/css/EditProf.css";
import Navbar from "/src/components/Navbar"; // Impor NavbarUser
import Headeruser from "/src/components/Headeruser";

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
      {/* Call NavbarUser component */}
      <Navbar />  

      {/* Call HeaderUser component */}
      <Headeruser />

      {/* New Social Profile Section */}
      <div className="containerEditProfileup2">
        <div className="containerEdit3">
          <div className="new-profile">
            <h3>Social Profile</h3>
            <div className="divider"></div>
            <div className="form-grid-avril">
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
