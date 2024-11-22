import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "/src/css/style.css";
import "/src/css/postUser.css";
import NavbarUser from "/src/components/NavbarEdit-Company"; 
import Headeruser from "/src/components/HeaderUser1";

function Stars() {
  const navigate = useNavigate();
  return (
    <div>
      <NavbarEdit-Company />

{/* Tambahkan HeaderUser di bawah Navbar */}
<Headeruser1 />

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

      {/* New Job Card Section */}
      <div className="containerEditPost">
        <div className="job-card">
          <div className="job-image">
            <img src="/src/image/jobsStars.png" alt="jobsStars" />
            <div className="rating">
              <span className="star" data-value="1">&#9733;</span>
              <span className="star" data-value="2">&#9733;</span>
              <span className="star" data-value="3">&#9733;</span>
              <span className="star" data-value="4">&#9733;</span>
              <span className="star" data-value="5">&#9733;</span>
            </div>
          </div>
          <div className="job-content">
            <h3>Design modern websites in Figma or AdobeXD</h3>
            <p>
              I'm looking for a UI/UX Designer, gathering user requirements,
              building navigation components. I don’t care how many projects you
              worked on, I look for quality.
            </p>
            <div className="job-info">
              <span>14 Days</span>
              <div className="job-info1">
                <span>Tue. 20 Nov, 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stars;
