import React, { useEffect, useState } from "react";
import "./style/portfolio.scss";
import Header from "../Header/Header";
import Timeline from "../Portfolio/TimeLine/Timeline";
import "react-vertical-timeline-component/style.min.css";
import MobileNav from "../Header/MobileNav";
import { Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJetFighterUp } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Portfolio() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(!open);
  }

  useEffect(() => {
    const scrollTop = document.querySelector(
      ".portfolio_container .scroll-top"
    );
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 848) {
        scrollTop.style.display = "block";
        scrollTop.style.opacity = 1;
      } else {
        scrollTop.style.opacity = 0;
        scrollTop.style.display = "none";
      }
    });
  });
  return (
    <div
      className="portfolio_container"
      data-aos="fade-in"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
    >
      <Tooltip title="scroll top" placement="top">
        <FontAwesomeIcon
          icon={faJetFighterUp}
          className="scroll-top"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        />
      </Tooltip>
      <MobileNav isClicked={open} close={handleClose} />
      <Header click={handleOpen} />
      <div className="bg"></div>
      <div className="projects_conatiner">
        <Timeline />
      </div>
    </div>
  );
}

export default Portfolio;
