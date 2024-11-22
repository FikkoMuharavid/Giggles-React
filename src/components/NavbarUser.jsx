import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const NavbarUser = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (event) => {
    // Close dropdown if clicked outside profile icon and dropdown menu
    if (
      !event.target.closest(".profile-icon") &&
      !event.target.closest(".dropdown-menu")
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/homeguest" },
    { name: "Gallery", path: "/gallery" },
    { name: "Jobs", path: "/jobs" },
    { name: "About Us", path: "/aboutus" },
  ];

  const dropdownItems = [
    { name: "Profile", path: "/EditProfile", icon: "bi bi-person" },
    { name: "Sign Out", path: "#", icon: "bi bi-box-arrow-right" },
  ];

  return (
    <nav>
      <div className="navMenu">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menuActive" : "menuNonActive"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="navGiggle">
        <div className="giggle">Giggle’s</div>
      </div>

      <div className="navRight">
        <div className="notification">
          <NavLink to="/notification">
            <img
              src="../images/icnNotification.png"
              alt="Notification"
              style={{ width: "30px" }}
            />
          </NavLink>
        </div>
        <div className="profile">
          <img
            src="../images/profile.png"
            className="profile-icon"
            alt="Profile"
            style={{ width: "75px" }}
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="dropdown-menu" style={{ zIndex: 10000 }}>
              {dropdownItems.map((item, index) => (
                <NavLink key={index} to={item.path} className="dropdown-item">
                  <span className={item.icon}></span>
                  <p>{item.name}</p>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
