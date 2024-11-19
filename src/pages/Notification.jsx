import React from "react";
import NavbarGuest from "../components/NavbarGuest";
import Footer from "../components/Footer";
import "../styles/Notification.css";

function Notification() {
  return (
    <div className="notifpage">
      <NavbarGuest />
      <div className="container">
        <h2>Notification</h2>
        <br />
        <div className="containerAction">
          <a href="" style={{ color: "#ffffffbb" }}>
            <i className="bi bi-check2-all" style={{ fontSize: "24px" }}></i> Mark as read
          </a>
          <a href="" style={{ marginLeft: "3%" }}>
            Clear all
          </a>
        </div>
        <h3>Today</h3>

        <div className="notification">
          <div className="imgProfile">
            <img
              alt="Profile picture of Aufa Sarifatun"
              height="60px"
              src="https://storage.googleapis.com/a1aa/image/oeZEX5d9y5UiHqoRwlXrfeH4xCEUU2vO9uqvfgnBm7CcvUBPB.jpg"
              width="60px"
            />
          </div>

          <div className="content">
            <h4>Aufa Sarifatun</h4>
            <p>commented on your post</p>
            <span className="time">1 hour ago</span>
          </div>
          <div className="gambar">
            <img
              className="imgNotif"
              alt="Thumbnail of the post commented on"
              src="src\images\Projek1.png"
            />
          </div>
        </div>

        <div className="notification">
          <div className="imgProfile">
            <img
              alt="Profile picture of Aufa Sarifatun"
              height="60px"
              src="https://storage.googleapis.com/a1aa/image/oeZEX5d9y5UiHqoRwlXrfeH4xCEUU2vO9uqvfgnBm7CcvUBPB.jpg"
              width="60px"
            />
          </div>

          <div className="content">
            <h4>Budiono</h4>
            <p>commented on your post</p>
            <span className="time">2 hour ago</span>
          </div>
          <div className="gambar">
            <img
              className="imgNotif"
              alt="Thumbnail of the post commented on"
              src="src\images\Projek2.png"
            />
          </div>
        </div>

        <div className="notification">
          <div className="imgProfile">
            <img
              alt="Profile picture of Aufa Sarifatun"
              height="60px"
              src="https://storage.googleapis.com/a1aa/image/oeZEX5d9y5UiHqoRwlXrfeH4xCEUU2vO9uqvfgnBm7CcvUBPB.jpg"
              width="60px"
            />
          </div>

          <div className="content">
            <h4>Fikko</h4>
            <p>commented on your post</p>
            <span className="time">3 hour ago</span>
          </div>
          <div className="gambar">
            <img
              className="imgNotif"
              alt="Thumbnail of the post commented on"
              src="src/images/Projek4.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Notification;

