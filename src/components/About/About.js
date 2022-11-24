import React, { useRef, useState } from "react";
import "./style/about.scss";
import Header from "../../components/Header/Header";
import img from "../../assets/314390280_483879007110766_7406666164304615602_n.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import PrgmSkill from "./skills/PrgmSkill";
import SoftSkill from "./skills/SoftSkill";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import py from "../../assets/py.png";
import dj from "../../assets/dj.png";
import mongo from "../../assets/mongo.png";
import scss from "../../assets/scss.png";
import sql from "../../assets/sql.png";
import java from "../../assets/java.png";
import material from "../../assets/material.png";
import git from "../../assets/git.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import creative from "../../assets/brain.png";
import team from "../../assets/partnership.png";
import debug from "../../assets/debug.png";
import passion from "../../assets/learning.png";
import MobileNav from "../Header/MobileNav";
import link from "https://drive.google.com/file/d/12JK-kpjBf83NPKUdfBwFFo2PxHEkfabx/view?usp=sharing";
function About() {
  const soft = useRef("soft");
  const prgm = useRef("prgm");

  const [click, setClick] = useState(false);
  function handleClick() {
    if (!click) {
      soft.current.style.transform = "translateX(-200%)";
      prgm.current.style.transform = "translateX(0%)";
      setClick(!click);
    } else {
      setClick(!click);
      prgm.current.style.transform = "translateX(200%)";
      soft.current.style.transform = "translateX(0%)";
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(!open);
  }
  const d = new Date();
  let my_age = d.getFullYear() - 2001;

  return (
    <div className="about_container">
      <MobileNav isClicked={open} close={handleClose} />
      <Header click={handleOpen} />
      <div className="bg" data-value="9">
        <h1>
          I make art with code.
          <br />
          do i consider as an artist ?
        </h1>
      </div>
      <div className="about_hero">
        <div className="img_div">
          <img src={img} alt="img" className="myimg" />
        </div>
        <div className="description_div">
          <div className="header_about">
            <hr></hr>
            <h1>About me</h1>
            <hr></hr>
          </div>
          <div className="about_desc">
            <h1>
              My name is Mohamed Haj Ali
              <br />a {my_age} years old web developer and a software
              engineering student
            </h1>
            <p>
              In the last 3 years I have been immersed in developing my skills
              and acquiring new knowledge in the field of programming,
              especially in web development, and I've always been keen to stay
              up-to-date And not missing anything or any opportunity that can
              enrich my knowledge ,I am very passionate and ambitious to reach
              the highest levels in this field and to offer
              professional,creative and unique products for my clients.
            </p>
            <a href={link} download>
              Download cv <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
      </div>

      <div className="skills_hero">
        <div className="skill_header">
          <hr />
          <h1>My Skills</h1>
          <hr />
        </div>
        <FontAwesomeIcon
          icon={click ? faArrowAltCircleLeft : faArrowAltCircleRight}
          onClick={handleClick}
        />
        <div className="skills">
          <div className="soft_skills" ref={soft}>
            <SoftSkill
              image={creative}
              desc="I am creative and always eager to provide unique content that brings sight, My Creativity is unlimited and evolving as much as my capabilities evolve."
              title="Creativity"
            />
            <SoftSkill
              image={team}
              desc="I am someone who believes that unity is strength And I appreciate working on a team for the sharing of knowledge and experience."
              title="Team working"
            />
            <SoftSkill
              image={debug}
              desc="I believe that success is the result of mistakes so I always seek to solve problems in my code and learn from it."
              title="Problem-solving"
            />
            <SoftSkill
              image={passion}
              desc="I am very grateful to the person who told me that school doesn't teach you everything so that's why I am always dependent on self-learning."
              title="Self-learning"
            />
          </div>
          <div className="prgm_skills" ref={prgm}>
            <Slider {...settings}>
              <div>
                <PrgmSkill name="HTML" progress="95%" logo={html} />
                <PrgmSkill name="CSS" progress="95%" logo={css} />
                <PrgmSkill name="Javascript" progress="85%" logo={js} />
              </div>
              <div>
                <PrgmSkill name="ReactJS" progress="80%" logo={react} />
                <PrgmSkill name="Python" progress="65%" logo={py} />
                <PrgmSkill name="Django" progress="50%" logo={dj} />
              </div>
              <div>
                <PrgmSkill name="SCSS" progress="70%" logo={scss} />
                <PrgmSkill name="Material UI" progress="80%" logo={material} />
                <PrgmSkill name="MongoDB" progress="45%" logo={mongo} />
              </div>
              <div>
                <PrgmSkill name="JAVA" progress="50%" logo={java} />
                <PrgmSkill name="Mysql" progress="90%" logo={sql} />
                <PrgmSkill name="Git" progress="90%" logo={git} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
