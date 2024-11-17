import React, { useEffect } from "react";
import "../styles/navbar.css";

const NavbarUser = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (event) => {
    // Tutup dropdown jika klik terjadi di luar elemen .profile-icon dan dropdown menu
    if (!event.target.closest(".profile-icon") && !event.target.closest(".dropdown-menu")) {
      setDropdownOpen(false);
    }
  };

  // Tambah event listener saat komponen mount dan bersihkan saat komponen unmount
  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    // Bersihkan event listener saat komponen unmount
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <nav>
      <div className="navMenu">
        <a href="HomeUser.html"><div className="menuActive">Home</div></a>
        <a href=""><div className="menuNonActive">Gallery</div></a>
        <a href=""><div className="menuNonActive">Jobs</div></a>
        <a href="About.html"><div className="menuNonActive">About Us</div></a>
      </div>

      <div className="navGiggle">
        <div className="giggle">Giggle’s</div>
      </div>

      <div className="navRight">
        <div className="notification">
          <a href="Notification.html">
            <img src="src/images/icnNotification.png" alt="" style={{ width: "30px" }} />
          </a>
        </div>
        <div className="profile">
          <img
            src="src/images/profile.png"
            className="profile-icon"
            alt=""
            style={{ width: "75px" }}
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="dropdown-menu" style={{ zIndex: 10000 }}>
              <a href="user-post.html" className="dropdown-item">
                <span className="bi bi-person"></span>
                <p>Profile</p>
              </a>
              <a href="#" className="dropdown-item">
                <span className="bi bi-box-arrow-right"></span>
                <p>Sign Out</p>
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
