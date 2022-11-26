import React, { useState } from "react";
import "./style/about.scss";
import Header from "../../components/Header/Header";
import img from "../../assets/314390280_483879007110766_7406666164304615602_n.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faDownload } from "@fortawesome/free-solid-svg-icons";
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
import MobileNav from "../Header/MobileNav";

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

              <PrgmSkill name="Python" progress="65%" logo={py} />
              <PrgmSkill name="Javascript" progress="85%" logo={js} />
              <PrgmSkill name="JAVA" progress="50%" logo={java} />
            </div>
            <div>
              <h3>
                <FontAwesomeIcon icon={faCircle} /> Frontend
              </h3>
              <PrgmSkill name="HTML" progress="95%" logo={html} />
              <PrgmSkill name="CSS" progress="95%" logo={css} />
              <PrgmSkill name="ReactJS" progress="80%" logo={react} />
              <PrgmSkill name="SCSS" progress="70%" logo={scss} />
            </div>
            <div>
              <h3>
                <FontAwesomeIcon icon={faCircle} /> Backend
              </h3>

              <PrgmSkill name="Django" progress="50%" logo={dj} />
            </div>
            <div>
              <h3>
                <FontAwesomeIcon icon={faCircle} /> database
              </h3>
              <PrgmSkill name="Mysql" progress="90%" logo={sql} />
              <PrgmSkill name="MongoDB" progress="45%" logo={mongo} />
            </div>
            <div>
              <h3>
                <FontAwesomeIcon icon={faCircle} /> Tools
              </h3>
              <PrgmSkill name="Material UI" progress="80%" logo={material} />
              <PrgmSkill name="Git" progress="90%" logo={git} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
