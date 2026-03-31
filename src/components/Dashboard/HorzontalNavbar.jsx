import React, { useState } from "react";
import "./css/HorzontalNavbar.css";
import Staricon from "../../assets/staricon.jpg";

const HorzontalNavbar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    "Dashboard",
    "Tasks",
    "Calendar",
    "Focus Mode",
    "Analytics",
    "Notifications",
  ];

  return (
    <div className="HorzontalNavbar-Maincontainer">
      <div className="HorzontalNavbar-innercontainer1">
        <img src={Staricon} alt="" className="HorzontalNavbar-Staricon" />
        <div>
          <h1>SmartDeadline</h1>
          <p>Stay on track</p>
        </div>
      </div>

      <div className="HorzontalNavbar-innercontainer2"></div>

      <div className="HorzontalNavbar-innercontainer3">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item}
              className={activeItem === item ? "active" : ""}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HorzontalNavbar;
