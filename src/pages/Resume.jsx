import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/style.css"; // Ensure this is the correct path
import "../css/EditProf.css"; // Ensure this is the correct path
import NavbarUser from "../components/NavbarUser";
import Headeruser from "../components/Headeruser";

function Resume() {


  return ( // Make sure this return statement is present
    <div>
      {/* NavbarUser and HeaderUser should be rendered correctly */}
      <NavbarUser />
      <Headeruser />

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
