import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "/src/css/style.css";
import NavbarEditProff from "/src/components/NavbarEditProff.jsx";
import Headeruser1 from "/src/components/Headeruser1.jsx";
import "/src/css/postUser.css";

function Post() {
  return (
    <div className="avril">
      <NavbarEditProff />
      <div className="containerPoto">
        <div className="profile1">
          <img
            src="/src/image/profile.png"
            alt="Profile image of Kylie Jenner"
            style={{ width: "95px" }}
          />
          <div className="profile-info1">
            <div className="profile-name1">
              Kylie Jenner
              <div className="underline1"></div> {/* Garis di bawah nama */}
            </div>
            <div className="additional-text1">Designer</div>
          </div>
        </div>
      </div>
      {/* Call HeaderUser component */}
      <Headeruser1 />

      {/* Profile Section */}

      {/* Project Buttons Section */}
      <div className="containerEditPost">
        <div className="button-container">
          <div className="button-item">
            <img src="/src/image/Projek1.png" alt="Button 1" />
          </div>
          <div className="button-item">
            <img src="/src/image/Projek2.png" alt="Button 2" />
          </div>
          <div className="button-item">
            <img src="/src/image/Projek3.png" alt="Button 3" />
          </div>
          <div className="button-item">
            <img src="/src/image/Projek4.png" alt="Button 4" />
          </div>
        </div>
      </div><br />
    </div>
  );
}

export default Post;
