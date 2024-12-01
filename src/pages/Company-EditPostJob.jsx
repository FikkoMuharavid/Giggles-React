import React from "react";
import HeaderEditCompany from "../components/HeaderEditCompany";
import Navbar from "../components/Navbar";

function CompanyEditPostJob() {
  return (
    <>
      <Navbar />
      <div className="company2">
      <HeaderEditCompany />
        <div className="containerEditPost">
          
          <div className="containerEdit">
            <div className="tittle">Post a Job</div>
            <hr
              style={{
                marginTop: "13px",
                borderWidth: "2px",
                boxShadow: "0px 0px 4px 0px rgba(255, 255, 255, 0.25)",
              }}
            />

            <div className="form" style={{ marginTop: "30px" }}>
              <h3>Position</h3>
              <input
                type="text"
                name=""
                id=""
                style={{ width: "95%" }}
                placeholder="Type here..."
              />
            </div>

            <div className="form" style={{ marginTop: "20px" }}>
              <h3>Category</h3>

              <div className="containerCategory">
                <div className="tag active">UI/UX</div>
                <div className="tag active">Technology</div>
                <div className="tag">
                  Strategy <span>+</span>
                </div>
                <div className="tag">
                  Interfaces <span>+</span>
                </div>
                <div className="tag">
                  Programming <span>+</span>
                </div>
                <div className="tag">
                  Writing <span>+</span>
                </div>
                <div className="tag active">Web Design</div>
                <div className="tag">
                  Art & Illustration <span>+</span>
                </div>
                <div className="input-containerCategory2">
                  <input type="text" placeholder="Other" />
                </div>
              </div>
            </div>

            <div className="form" style={{ marginTop: "20px" }}>
              <h3>Description</h3>
              <input
                type="text"
                name=""
                id=""
                style={{ width: "95%" }}
                placeholder="Type here..."
              />
            </div>

            <div className="form" style={{ marginTop: "20px" }}>
              <h3>Photo</h3>
              <button className="btnSecondary" style={{ marginTop: "10px" }}>
                Upload Photo
              </button>
            </div>

            <style>{`
            .containerCategory {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
            }

            .tag {
              display: flex;
              align-items: center;
              padding: 10px 15px;
              border-radius: 10px;
              border: 1px solid #fff;
              cursor: pointer;
              transition: all 0.3s ease;
            }

            .tag.active {
              background-color: #fff;
              color: #333;
            }

            .tag:hover {
              background-color: #f5f5f5;
            }

            .input-containerCategory {
              flex-grow: 1;
              margin-left: 10px;
            }

            .input-containerCategory input {
              width: 100%;
              padding: 10px;
              border-radius: 10px;
              border: 1px solid #fff;
            }
          `}</style>
            <button className="buttonSave">Save Profile</button>
          </div>
        </div>
      </div><br />
    </>
  );
}

export default CompanyEditPostJob;
