import React from "react";
import NavbarGuest from "../components/NavbarUser";
import Footer from "../components/Footer";
import "../styles/User-PostCreation.css";

function PostCreation() {
  return (
    <div className="postcreationpage">
      <NavbarGuest />
      <div className="postcreation">
        <div className="tittle">Post Your Creation</div>
        <hr style={{ marginTop: "13px", border: "2px solid white", boxShadow: "0px 0px 4px 0px rgba(255, 255, 255, 0.25)" }} />

        <div className="form" style={{ marginTop: "30px" }}>
          <h3>Tittle</h3>
          <input
            type="text"
            name=""
            id=""
            style={{ width: "95%" }}
            placeholder="Type here..."
          />
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
            <div className="input-containerCategory">
              <input type="text" placeholder="Other" />
            </div>
          </div>
        </div>

        <div className="form" style={{ marginTop: "20px" }}>
          <h3>Photo</h3>
          <button
            className="btnSecondary"
            style={{ marginTop: "10px", fontSize: "20px" }}
          >
            Upload Photo
          </button>
        </div>
        <button className="buttonSave">Upload</button>
      </div>
      <Footer />
    </div>
  );
}

export default PostCreation;

