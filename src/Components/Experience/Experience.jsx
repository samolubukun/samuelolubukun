import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--black)':''}}>2+</div>
        <span  style={{color: darkMode?'white':''}}>Years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--black)':''}}>30+</div>
        <span  style={{color: darkMode?'white':''}}>Completed </span>
        <span>Projects (Portfolio Projects)</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--black)':''}}>-</div>
        <span  style={{color: darkMode?'white':''}}>Companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
