import React, { useEffect, useState } from "react";
import "./style/about.scss";
import Header from "../../components/Header/Header";
import img from "../../assets/314390280_483879007110766_7406666164304615602_n.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faDownload,
  faJetFighterUp,
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
import creative from "../../assets/brain.png";
import team from "../../assets/partnership.png";
import debug from "../../assets/debug.png";
import passion from "../../assets/learning.png";
import github from "../../assets/github.png";
import redux from "../../assets/redux.png";
import nodejs from "../../assets/nodejs.png";
import MobileNav from "../Header/MobileNav";
import { Tooltip } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function About() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(!open);
  }
  const d = new Date();
  let my_age = d.getFullYear() - 2001;

  useEffect(() => {
    const scrollTop = document.querySelector(".about_container .scroll-top");
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
      className="about_container"
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
              Over the last three years, I have been immersed in developing my
              skills and gaining new knowledge in the area of programming,
              especially in web development, and I always wanted to stay updated
              and not miss anything that could enrich my knowledge ,I am very
              passionate and ambitious to achieve the highest levels in this
              field and to offer professional, creative and unique products for
              my customers.
            </p>
            <a
              href="https://drive.google.com/file/d/12JK-kpjBf83NPKUdfBwFFo2PxHEkfabx/view?usp=sharing"
              download
              target="__blank"
            >
              Download cv <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
      </div>

      <div className="skills_hero">
        <div className="soft_skills_main">
          <div className="skill_header">
            <hr />
            <h1>Soft skills</h1>
            <hr />
          </div>
          <div className="soft_skills">
            <SoftSkill
              image={creative}
              desc="I am creative and always willing to provide unique content that brings sight, My creativity is limitless and evolves as my abilities evolve."
              title="Creativity"
            />
            <SoftSkill
              image={team}
              desc="I am someone who believes that unity is strength and I appreciate working as a team for the sharing of knowledge and experience."
              title="Team working"
            />
            <SoftSkill
              image={debug}
              desc="I think success is the result of mistakes, so I always try to solve problems in my code and learn from it."
              title="Problem-solving"
            />
            <SoftSkill
              image={passion}
              desc="I am very grateful to the person who told me that school doesn't teach you everything, which is why I am always depending on self-learning."
              title="Self-learning"
            />
          </div>
        </div>
        <div className="prgm_skills_main">
          <div className="skill_header">
            <hr />
            <h1>programming skills</h1>
            <hr />
          </div>
          <div className="prgm_skills">
            <div>
              <h3>
                <FontAwesomeIcon icon={faCircle} /> Languages
              </h3>
              <div className="skills">
                <PrgmSkill name="Python" progress="65%" logo={py} />
                <PrgmSkill name="Javascript" progress="85%" logo={js} />
                <PrgmSkill name="JAVA" progress="50%" logo={java} />
              </div>
            </div>
            <div>
              <h3>
                <FontAwesomeIcon icon={faCircle} /> Frontend
              </h3>
              <div className="skills">
                <PrgmSkill name="HTML" progress="95%" logo={html} />
                <PrgmSkill name="CSS" progress="95%" logo={css} />
                <PrgmSkill name="ReactJS" progress="80%" logo={react} />
              </div>
            </div>
            <div>
              <h3>
                <FontAwesomeIcon icon={faCircle} /> Backend
              </h3>
              <div className="skills">
                <PrgmSkill name="Django" progress="50%" logo={dj} />
                <PrgmSkill name="NodeJs" progress="50%" logo={nodejs} />
              </div>
            </div>
            <div>
              <h3>
                <FontAwesomeIcon icon={faCircle} /> database
              </h3>
              <div className="skills">
                <PrgmSkill name="Mysql" progress="90%" logo={sql} />
                <PrgmSkill name="MongoDB" progress="45%" logo={mongo} />
              </div>
            </div>
            <div>
              <h3>
                <FontAwesomeIcon icon={faCircle} /> Tools
              </h3>
              <div className="skills">
                <PrgmSkill name="Redux" progress="60%" logo={redux} />
                <PrgmSkill name="Github" progress="70%" logo={github} />
                <PrgmSkill name="SCSS" progress="70%" logo={scss} />
                <PrgmSkill name="Material UI" progress="80%" logo={material} />
                <PrgmSkill name="Git" progress="60%" logo={git} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
