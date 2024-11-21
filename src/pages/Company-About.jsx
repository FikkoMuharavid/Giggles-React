import React from "react";
import NavbarEditCompany from "../components/NavbarEdit-Company";
import "../styles/Company-Profile.css";
import HeaderCompany from "../components/HeaderCompany";
// import "../styles/Company-EditProfile.css";

function CompanyAbout() {
  return (
    <div className="pagecompany">
      <NavbarEditCompany />
      <div className="profile-container">
        <img src="../images/profile.png" alt="" style={{ width: "100px" }} />
        <div className="tittle">Frozen Company</div>
      </div>

      <HeaderCompany />

      <div className="companyd">
        <div className="containerDesc">
          <center>
            <div className="tittle">Description</div>
          </center>
          <br />
          <p style={{ textAlign: "justify" }}>
            A graphic design company focused on providing creative and
            innovative solutions across industries. We blend striking aesthetics
            with strategic design to build strong brand identities, impactful
            marketing materials, and engaging user experiences. Our skilled team
            ensures each design meets client needs, balancing visual appeal with
            business effectiveness.
          </p>
          <div className="row">
            <div className="column">
              <h2>Visi</h2>
              <p style={{ textAlign: "justify" }}>
                To become a leading graphic design company recognized for
                innovation and creativity, while helping brands shine and reach
                their full potential in the digital world.
              </p>
            </div>
            <div className="column">
              <h2>Misi</h2>
              <p style={{ textAlign: "justify" }}>
                Producing unique designs to meet client needs. Exploring the
                latest trends and design technologies to provide solutions.
                Maintaining high standards in every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyAbout;
