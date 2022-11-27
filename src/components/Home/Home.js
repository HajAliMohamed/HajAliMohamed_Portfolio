import React, { useState } from "react";
import Header from "../Header/Header";
import MobileNav from "../Header/MobileNav";
import "./style/home.scss";
import { Link } from "react-router-dom";
import card from "../../assets/hamouda0 copie.png";
import { Tooltip } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookOpen } from "@fortawesome/free-solid-svg-icons";
AOS.init();
function Home() {
  const handleMove = (e) => {
    const fut = document.querySelector(".fut");
    const bg = document.querySelector(".bg");
    let moving_value = fut.getAttribute("data-value");
    let moving_value2 = bg.getAttribute("data-value");
    let x = (e.clientX * moving_value) / 550;
    let y = (e.clientY * moving_value) / 550;
    let z = (e.clientX * moving_value2) / 1800;
    let k = (e.clientY * moving_value2) / 1800;
    fut.style.transform = `translateX(${x}px)translateY(${y}px) `;
    bg.style.transform = `translateX(${z}px)translateY(${k}px) `;
  };

  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(!open);
  }

  const [hover, setHover] = useState(false);
  function handleSetTrue() {
    setHover(true);
  }

  function handleSetFalse() {
    setHover(false);
  }

  return (
    <div
      className="home_container"
      onMouseMove={handleMove}
      data-aos="fade-in"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
    >
      <MobileNav isClicked={open} close={handleClose} />
      <Header click={handleOpen} />
      <div className="bg" data-value="9"></div>
      <div className="hero">
        <div className="hero_rep">
          <h1>Hey There,</h1>
          <h1>
            I’m Mohamed Haj Ali, i make creative and unique pieces of art with
            code.
          </h1>
          <Link
            to="/about"
            onMouseEnter={handleSetTrue}
            onMouseLeave={handleSetFalse}
          >
            see more <FontAwesomeIcon icon={hover ? faBookOpen : faBook} />
          </Link>
        </div>
        <div className="hero_img">
          <Tooltip title="made by @islem__ayed" placement="top">
            <img src={card} alt="FUTCARD" className="fut" data-value="9" />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Home;
