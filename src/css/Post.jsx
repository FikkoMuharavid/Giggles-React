import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "/src/css/style.css";
import "/src/css/navbar.css";
import "/src/css/postUser.css";

function Post() {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <div className="navMenu">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "menuActive" : "menuNonActive"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "menuActive" : "menuNonActive"
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive ? "menuActive" : "menuNonActive"
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "menuActive" : "menuNonActive"
            }
          >
            About Us
          </NavLink>
        </div>

        <div className="navGiggle">
          <div className="giggle">Giggle’s</div>
        </div>

        {/* Button Edit */}
        <div className="navRight">
          <button className="signUp" onClick={() => navigate("/EditProfile")}>
            Edit
          </button>
        </div>
      </nav>

      {/* Profile Section */}
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

      <div className="header">
        <div className="containerHeader">
          <NavLink
            to="/Post"
            className={({ isActive }) =>
              isActive ? "header-item active" : "header-item"
            }
          >
            Post
          </NavLink>
          <NavLink
            to="/Collection"
            className={({ isActive }) =>
              isActive ? "header-item active" : "header-item"
            }
          >
            Collection
          </NavLink>
          <NavLink
            to="/Stars"
            className={({ isActive }) =>
              isActive ? "header-item active" : "header-item"
            }
          >
            Stars
          </NavLink>
          <NavLink
            to="/Contacts"
            className={({ isActive }) =>
              isActive ? "header-item active" : "header-item"
            }
          >
            Contacts
          </NavLink>
        </div>
        <hr
          style={{ margin: "0 2%", marginTop: "-0.5%", borderWidth: "2px" }}
        />
      </div>

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
      </div>

      
        
           
  
     
      
    </div>
  );
}

export default Post;
