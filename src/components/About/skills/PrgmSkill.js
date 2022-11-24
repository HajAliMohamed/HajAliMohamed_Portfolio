import React from "react";
import "./style/PrgmSkill.scss";
function PrgmSkill({ name, progress, logo }) {
  return (
    <div className="skill_progress_container">
      <div className="skill">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h4>{name}</h4>
        </div>
        <div className="numer">
          <h4>{progress}</h4>
        </div>
      </div>
      <div className="progreess" data-value={progress}>
        <div className="inner_div" style={{ width: `${progress}` }}></div>
      </div>
    </div>
  );
}

export default PrgmSkill;
