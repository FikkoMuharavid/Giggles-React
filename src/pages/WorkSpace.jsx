import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "/src/css/style.css";
import "/src/css/EditProf.css";
import Navbar from "/src/components/Navbar"; // Impor NavbarUser
import Headeruser from "/src/components/Headeruser.jsx";

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
      {/* Call NavbarUser component */}
      <Navbar />  

      {/* Call HeaderUser component */}
      <Headeruser />
      {/* Work Preferences Section */}
      <div className="containerEditProfileup3">
        <div className="containerEdit2">
          <h3>Work Preferences</h3>
          <div className="divider"></div>
          <div className="form-grid-avril">
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
