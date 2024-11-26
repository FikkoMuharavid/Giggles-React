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
          to="/Post"
          className="header-item"
        >
         Post
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          to="/Collection"
          className="header-item"
        >
          Collection
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          to="/Stars"
          className="header-item"
        >
          Stars
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          to="/Contacts"
          className="header-item"
        >
          Contacts
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
