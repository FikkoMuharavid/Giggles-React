import React from "react";
import NavbarEditCompany from "../components/NavbarEdit-Company";
import HeaderCompany from "../components/HeaderCompany";
import {NavLink} from "react-router-dom";

const CompanyJobList = () => {
  return (
    <div className="pagecompany">
      <NavbarEditCompany />
      
      <div className="profile-container">
        <img src="../images/profile.png" alt="" style={{ width: "100px" }} />
        <div className="tittle">Frozen Company</div>
      </div>

      <HeaderCompany />

      <div className="companyd">
        <div className="containerDescJobList">
          <NavLink to="/company-edit-postjob">
            <button className="btnSecondary">Post New Job</button>
          </NavLink>
          <div className="card-containerz">
            <div className="cardz">
              <img
                alt="Microsoft logo"
                height="60"
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                width="60"
              />
              <div className="card-content">
                <p>Microsoft</p>
                <h3>UI / UX DESIGN</h3>
                <p style={{ paddingTop: "5px" }}>
                  UI is the look, and UX is the experience of using a product.
                </p>
              </div>
              <button className="learn-more-btn">
                Learn More
                <i className="bi bi-arrow-right"> </i>
              </button>
            </div>
            <div className="cardz">
              <img
                alt="Microsoft logo"
                height="60"
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                width="60"
              />
              <div className="card-content">
                <p>Microsoft</p>
                <h3>UI / UX DESIGN</h3>
                <p>
                  A programmer is someone who writes, tests, and maintains code to
                  create software, applications, or systems.
                </p>
              </div>
              <button className="learn-more-btn">
                 Learn More
                <i className="bi bi-arrow-right"> </i>
              </button>
            </div>
          </div>
        </div>
      </div><br />
    </div>
  );
};

export default CompanyJobList;

