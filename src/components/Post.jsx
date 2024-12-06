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
      <div className="containerEditPost1">
      <div className="job-cardAvril1">
        <div className="button-container1">
          
          <div className="upload-text-section avril">
    <h3 className="upload-title avril">Upload your first post!</h3>
    <p className="upload-description avril">
      Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
      phasellus mollis sit aliquam sit nullam neque ultrices.
    </p>
    <NavLink
  to="/User-PostCreation"  // Ganti dengan path tujuan yang Anda inginkan
  className="upload-button avril"  // Class CSS untuk tombol
>
  Upload
</NavLink>

  </div>
            </div>
      </div><br />
    </div>  </div>
  );
}

export default Post;
