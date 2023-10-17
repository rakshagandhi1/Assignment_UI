import React, { useState } from "react";
import projectManager from "../assets/pm_profile.jpg";

export default function Sidebar() {
  const [myStyle, setMyStyle] = useState({
    display: "block",
  });
  const toggleSideNav = () => {
    if (myStyle.display === "block") {
      setMyStyle({
        display: "none",
      });
    } else {
      setMyStyle({
        display: "block",
      });
    }
  };
  return (
    <div className="sidebar" id="sidebar">
      <h5 className="heading">
        <i className="fa fa-dashboard"></i> Dashboard
      </h5>
      <a className="icon" onClick={toggleSideNav}>
        <i className="fa fa-bars"></i>
      </a>
      <div className="mt-4" id="links" style={myStyle}>
        <a className="active" href="#home">
          <span>
            <i className="fa fa-key"></i>&nbsp;&nbsp;Dashboard
          </span>
          {/* <i className="fa fa-angle-right"></i> */}
        </a>
        <a href="#news">
          <span>
            <i className="fa fa-product-hunt"></i>&nbsp;&nbsp;Product
          </span>
          <i className="fa fa-angle-right"></i>
        </a>
        <a href="#contact">
          <span>
            <i className="fa fa-user"></i>&nbsp;&nbsp;Customers
          </span>
          <i className="fa fa-angle-right"></i>
        </a>
        <a href="#about">
          <span>
            <i className="fa fa-money"></i>&nbsp;&nbsp;Income
          </span>
          <i className="fa fa-angle-right"></i>
        </a>
        <a href="#about">
          <span>
            <i className="fa fa-tag"></i>&nbsp;&nbsp;Promote
          </span>
          <i className="fa fa-angle-right"></i>
        </a>
        <a href="#about">
          <span>
            <i className="fa fa-question"></i>&nbsp;&nbsp;Help
          </span>
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
      <div
        className="d-flex justify-content-between align-items-center profileBox mt-5 gap-3"
        style={{ color: "#fff" }}
      >
        <div className="d-flex justify-content-start align-items-center">
          <img src={projectManager} alt="project-manager" />
          <div>
            <span>Evano</span>
            <p>Project Manager</p>
          </div>
        </div>
        <i className="fa fa-angle-down"></i>
      </div>
    </div>
  );
}
