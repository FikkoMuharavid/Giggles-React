import React from "react";
import { NavLink } from "react-router-dom";
import "/src/css/HeaderUser.css";

const Headeruser = () => {
  return (
    <div className="header">
      <div className="containerHeader">
        <NavLink
          exact="true"
          activeClassName="active"
          to="/EditProfile"
          className="header-item"
        >
          Edit Profile
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          to="/SocialProfile"
          className="header-item"
        >
          Social Profile
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          to="/Resume"
          className="header-item"
        >
          Resume
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          to="/WorkSpace"
          className="header-item"
        >
          WorkSpace
        </NavLink>
      </div>
      <hr
        style={{
          margin: "0 2%",
          marginTop: "-4%",
          borderWidth: "2px",
        }}
      />
    </div>
  );
};

export default Headeruser;
