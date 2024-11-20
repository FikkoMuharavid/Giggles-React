import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Company-EditProfile.css";

const HeaderEditCompany = () => {
  return (
    <div className="company2 header2">
      <div className="containerHeader2">
        <NavLink
          exact="true"
          activeClassName="active"
          to="/company-edit-profile"
          className="header-item2"
        >
          Edit Profile
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          to="/company-edit-about"
          className="header-item2 active"
        >
          About
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          to="/company-edit-postjob"
          className="header-item2"
        >
          Post a Job
        </NavLink>
      </div>
      <hr
        style={{
          margin: "0 2%",
          marginTop: "-0.5%",
          border: "2px solid #fff",
        }}
      />
    </div>
  );
};
export default HeaderEditCompany;
