import React from "react";
import Navbar from "../components/Navbar";
import "../styles/company-editprofile.css";
import HeaderEditCompany from "../components/HeaderEditCompany";

function CompanyEditAbout() {
  return (
    <>
      <Navbar />
      <div className="company2">
        
        <HeaderEditCompany />

        <div className="containerEditAbout">
          <div className="containerEdit">
            <div className="tittle">About Company</div>
            <hr
              style={{
                marginTop: "13px",
                border: "2px solid #fff",
                boxShadow: "0px 0px 4px 0px rgba(255, 255, 255, 0.25)",
              }}
            />

            <div className="form" style={{ marginTop: "30px" }}>
              <h3>Headline</h3>
              <input placeholder="Type here..." />
            </div>

            <div className="form" style={{ marginTop: "20px" }}>
              <h3>Body</h3>
              <input placeholder="Type here..." />
            </div>

            <div className="form" style={{ marginTop: "20px" }}>
              <h3>Visi</h3>
              <input placeholder="Type here..." />
            </div>

            <div className="form" style={{ marginTop: "20px" }}>
              <h3>Misi</h3>
              <input placeholder="Type here..." />
            </div>
            <button className="buttonSave">Save Profile</button>
          </div>
        </div>
      </div><br />
    </>
  );
}

export default CompanyEditAbout;
