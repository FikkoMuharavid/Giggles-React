import React from "react";
import HeaderCompany from "../components/HeaderCompany";
import NavbarEditCompany from "../components/NavbarEdit-Company";
import "../styles/Company-Profile.css";


const CompanyContact = () => {
  return (
    <div className="pagecompany">
      <NavbarEditCompany />

      <div className="profile-container">
        <img src="../images/profile.png" alt="" style={{ width: "100px" }} />
        <div className="tittle">Frozen Company</div>
      </div>

      <HeaderCompany />

      <div className="companyd">
        <div className="containerDescContact">
          <div className="info">
            <div className="tittle">Frozen Company</div>
            <a
              className="btnSecondary"
              href="#"
              style={{
                display: "inline-block",
                marginBottom: "40px",
                marginTop: "10px",
              }}
            >
              Visit Website
            </a>
            <div className="contact-item">
              <i className="bi bi-envelope"></i>
              <p>Frozen@company.co.id</p>
            </div>
            <div className="contact-item">
              <i className="bi bi-telephone"></i>
              <p>(+62) 881026707888</p>
            </div>
            <div className="contact-item">
              <i className="bi bi-geo-alt"></i>
              <p>Ketintang, Indonesia</p>
            </div>
          </div>
          <div className="map">
            <iframe
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.206073374073!2d112.729846314774!3d-7.319347994712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sUniversitas%20Negeri%20Surabaya%20-%20Kampus%20Ketintang!5e0!3m2!1sen!2sid!4v1634567890123!5m2!1sen!2sid"
            />
          </div>
        </div>
      </div><br />
    </div>
  );
};

export default CompanyContact;
