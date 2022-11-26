import React from "react";
import "./style/PrgmSkill.scss";
function PrgmSkill({ name, progress, logo }) {
  return <img src={logo} alt="logo" className="logo" />;
}

export default PrgmSkill;
