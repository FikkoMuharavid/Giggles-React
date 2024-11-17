import React from "react";
import "../styles/WelcomePage.css";

function WelcomePage() {
  return (
    <body className="welcome">
      <div className="containerwelcome">
        <div className="logo">
          <img src="/Logo.png" alt="" />
        </div>
        <div className="containerP">
          <p>Made by Team Giggle’s Celerates</p>
        </div>
        <div
          className="containerIcn"
          onClick={() =>
            (document.getElementById("overlay").style.display = "block")
          }
        >
          <a>
            <img src="src/images/icnSidebarHome.png" alt="" />
          </a>
        </div>
        <div
          id="overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background:
              "url(../Background1.png) lightgray 50% / cover no-repeat",
            opacity: 1,
            zIndex: 1000,
            display: "none",
          }}
        >
          <div className="containerSidebar">
            <a href="" style={{ position: "absolute", right: 40, top: 35 }}>
              <img src="src/images/icnClose.png" alt="" style={{ width: 50 }} />
            </a>
            <br />
            <br />
            <center>
              <a href="HomeGuest.html">
                <h1> HOME </h1>
              </a>
              <br />
            </center>
            <center>
              <a href="">
                <h1> GALLERY &nbsp;</h1>
              </a>
              <a href="">
                <h1> / &nbsp;JOBS </h1>
              </a>
              <br />
            </center>
            <center>
              <a href="user-post.html">
                <h1> PROFILE &nbsp;</h1>
              </a>
              <a href="About.html">
                <h1> / &nbsp;ABOUT US </h1>
              </a>
            </center>
            <center>
              <a href="Notification.html">
                <h1> NOTIFICATION </h1>
              </a>
            </center>
          </div>
        </div>
      </div>
    </body>
  );
}

export default WelcomePage;
