import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./style/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";
function Header({ click }) {
  return (
    <div className="header_container">
      <Tooltip title="made by @islem__ayed" placement="left">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </Tooltip>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/portfolio">portfolio</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>

      <div className="humburger">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            return click();
          }}
        />
      </div>
    </div>
  );
}

export default Header;
