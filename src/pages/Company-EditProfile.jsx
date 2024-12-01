import React from "react";
import Navbar from "../components/Navbar";
import HeaderEditCompany from "../components/HeaderEditCompany";
import "../styles/company-editprofile.css";

const EditProfileCompany = () => {
  return (
    <>
      <Navbar />
      <div className="company2">
      <HeaderEditCompany />
      <div className="containerEditProfile">
      
        <div className="containerEdit">
          <div className="changephoto">
            <img src="images/profile.png" alt="" style={{ width: "95px" }} />
            <button className="change" style={{ marginLeft: "3%" }}>
              Change Photo
            </button>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <h3>Company Name</h3>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <h3>Email</h3>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <h3>Company Address</h3>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <h3>Phone Number</h3>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <h3>Location</h3>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <h3>Website</h3>
              <input type="text" placeholder="Enter your name" />
            </div>
            <br /><br />
          </div>
          <button className="buttonSave">Save Profile</button>
        </div>
      </div><br />
      </div>
    </>
  );
};

export default EditProfileCompany;

