import React, { useState } from "react";
import "./style/portfolio.scss";
import Header from "../Header/Header";
import img1 from "../../assets/Screenshot from 2022-11-06 15-17-39.png";
import img2 from "../../assets/Screenshot from 2022-11-06 15-17-35.png";
import img3 from "../../assets/Screenshot from 2022-11-07 00-21-18.png";
import img4 from "../../assets/Screenshot from 2022-11-07 00-21-31.png";
import img5 from "../../assets/Screenshot from 2022-11-07 00-21-47.png";
import img6 from "../../assets/Screenshot from 2022-11-07 11-22-58.png";
import Project from "./Project/Project";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileNav from "../Header/MobileNav";
function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
        <Slider {...settings}>
          <Project
            align_self="flex-start"
            img={img6}
            title="Social Sientific Network (Project End Of the Year)"
            desc="social platform where you can read and post articles, share your knowledge and make connections with people with the same intrests"
            link="https://github.com/AbdRahmenAmri/PFA"
            githubLink="https://github.com/AbdRahmenAmri/PFA"
          />
          <Project
            align_self="flex-end"
            img={img1}
            title="Space Tourism (Frontend Mentor Challenge)"
            desc="recreate a design challenge from frontend mentor challenges"
            link="https://hajalimohamed.github.io/Space-Tourism-ReactJs/"
            githubLink="https://github.com/HajAliMohamed/Space-Tourism-ReactJs"
          />
          <Project
            align_self="flex-start"
            img={img5}
            title="JCI RAFRAF (Design Concept)"
            desc="static responsive website Dedicated for JCI rafraf which is introduce them with their activities and bureau members"
            link="https://hajalimohamed.github.io/JCIproject/"
            githubLink="https://github.com/HajAliMohamed/JCIproject"
          />
          <Project
            align_self="flex-end"
            img={img2}
            title="Sunny Side Landing Page (Frontend Mentor Challenge)"
            desc="recreate a design challenge from frontend mentor challenges"
            link="https://hajalimohamed.github.io/Sunny-side-landing-page_ReactJS/"
            githubLink="https://github.com/HajAliMohamed/Sunny-side-landing-page_ReactJS"
          />
          <Project
            align_self="flex-start"
            img={img4}
            title="Huddle Landing Page (Frontend Mentor Challenge)"
            desc="recreate a design challenge from frontend mentor challenges"
            link="https://hajalimohamed.github.io/ThirdProject/"
            githubLink="https://github.com/HajAliMohamed/ThirdProject"
          />
          <Project
            align_self="flex-end"
            img={img3}
            title="Insure Landing Page (Frontend Mentor Challenge)"
            desc="recreate a design challenge from frontend mentor challenges"
            link="hhttps://hajalimohamed.github.io/Insurre-Landing-Page/"
            githubLink="https://github.com/HajAliMohamed/Insurre-Landing-Page"
          />
        </Slider>
      </div>
    </div>
  );
}

export default Portfolio;
