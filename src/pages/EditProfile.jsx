import React from "react";
import "/src/css/style.css"; // Pastikan path ini benar
import "/src/css/EditProf.css"; // Pastikan path ini benar
import { NavLink } from "react-router-dom"; // Import NavLink
import NavbarUser from "/src/components/NavbarUser"; // Impor NavbarUser
import Headeruser from "/src/components/Headeruser";

function EditProfile() {
  return (
    <div>
      {/* Tambahkan NavbarUser di bagian atas */}
      <NavbarUser />

      {/* Tambahkan HeaderUser di bawah Navbar */}
      <Headeruser />

      <div className="containerEditProfile2">
        <div className="containerEditwork">
          <div className="changephoto">
            <div className="profile-container">
              <img
                src="/src/image/profile.png"
                alt=""
                style={{ width: "95px" }}
              />
              <div className="profile">
                <div className="profile-name">
                  Kylie Jenner
                  <div className="underline"></div>
                </div>
                <div className="additional-text">Designer</div>
              </div>
            </div>
            <button className="change" style={{ marginLeft: "3%" }}>
              Change Photo
            </button>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <h3>Name</h3>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <h3>Location</h3>
              <input type="text" placeholder="Enter your location" />
            </div>
            <div className="form-group">
              <h3>Bio</h3>
              <input type="text" placeholder="Enter your bio" />
            </div>
          </div>

          <div className="containerEditwork">
            <div className="containerEdit">
              <h3>Work History & Education</h3>
              <div className="divider"></div>
              <div className="form-grid-edit">
                <div className="form-group-edit work-history">
                  <h3>Additional Work History</h3>
                  <div className="two-column">
                    <input type="text" placeholder="Position" />
                    <span className="at-text">at</span>
                    <input type="text" placeholder="Company" />
                  </div>
                  <div className="two-column">
                    <input type="text" placeholder="Start Year" />
                    <span className="at-text">to</span>
                    <input type="text" placeholder="End Year" />
                  </div>
                  <p className="remove-btn1">Remove Work History</p>
                </div>

                <div className="form-group-edit education">
                  <h3>Additional Education</h3>
                  <div className="three-column">
                    <input type="text" placeholder="Degree" />
                    <span className="at-text">at</span>
                    <input type="text" placeholder="School / University" />
                    <input type="text" placeholder="Year" />
                  </div>
                  <p className="remove-btn1">Remove Education</p>
                </div>
              </div>
              <button className="buttonSave1">Save Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
