import React, { useState } from "react";
import "./style/portfolio.scss";
import Header from "../Header/Header";
import Timeline from "../Portfolio/TimeLine/Timeline";
import "react-vertical-timeline-component/style.min.css";
import MobileNav from "../Header/MobileNav";
function Portfolio() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(!open);
  }
  return (
    <div className="portfolio_container">
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
