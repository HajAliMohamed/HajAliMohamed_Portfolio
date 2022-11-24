import React from "react";
import "./style/SoftSkill.scss";
function SoftSkill({ image, desc, title }) {
  return (
    <div className="soft_skills_container">
      <div className="img_div">
        <img src={image} alt="img" />
      </div>
      <div className="soft_skill_desc">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default SoftSkill;
