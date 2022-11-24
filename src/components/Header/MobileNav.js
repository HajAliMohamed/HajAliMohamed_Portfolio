import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./style/mobilenav.scss";
function MobileNav({ isClicked, close }) {
  return (
    <div
      className="mobile_container"
      style={
        isClicked
          ? { transform: "translateX(0%)" }
          : { transform: "translateX(100%)" }
      }
    >
      <FontAwesomeIcon
        icon={faCircleXmark}
        onClick={() => {
          return close();
        }}
      />
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
    </div>
  );
}

export default MobileNav;
