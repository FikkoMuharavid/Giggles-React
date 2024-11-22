import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/style.css"; // Ensure this is the correct path
import "../css/EditProf.css"; // Ensure this is the correct path
import NavbarUser from "../components/NavbarUser";
import Headeruser from "../components/Headeruser";

function Resume() {
  // State to store the uploaded resume
  const [resume, setResume] = useState(null);

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
    }
  };

  return (
    <div>
      {/* NavbarUser and HeaderUser should be rendered correctly */}
      <NavbarUser />
      <Headeruser />

      <div className="containerEditProfileup2">
        <div className="containerEdit1">
          <div className="">
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

                {/* Display selected file name */}
                {resume && <p>File selected: {resume.name}</p>}
              </div>
            </div>

            {/* Save Profile Button */}
            <button className="buttonSave">Save Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
