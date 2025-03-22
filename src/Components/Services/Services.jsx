import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import frontend from "../../img/frontend.png";
import backend from "../../img/backend.png";
import Android from "../../img/android.png";
import dataAnalysis from "../../img/dataAnalysis.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
import Resume from './Olubukunresume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
<span style={{ color: "#0469ce" }}>&nbsp;&nbsp;&nbsp;&nbsp;Skillsets</span>

        {/* <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane> */}
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a> */}
    
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ right: "25rem" }}
          whileInView={{ right: "53rem" }}
          transition={transition}
        >
          <Card
            emoji={frontend}
            heading={"Front-End"}
            detail={"HTML, CSS, JavaScript, BootStrap, UI/UX, Reactjs"}
            tool2={"VS Code"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ right: "11rem", top: "12rem" }}
          whileInView={{ right: "39rem" }}
          transition={transition}
        >
          <Card
            emoji={backend}
            heading={"Back-End"}
            detail={"PHP, Django, Java Spring, MySQL, SQLite, MongoDB, Nodejs, Express"}
            tool2={"Terminal"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "-25rem" }}
          whileInView={{ right: "25rem" }}
          transition={transition}
        >
          <Card
            emoji={Android}
            heading={"Android"}
            detail={"Flutter, React, SQLite, FireBase"}
            tool2={"Android Studio"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
       

     {/* 4th */}
<motion.div
  initial={{ left: "-55rem", top: "22rem" }} // Start from outside the screen on the right
  whileInView={{ right: "35rem" }} // End position within the view
  transition={transition}
>
  <Card
    emoji={dataAnalysis}
    heading={"Data Science & Machine Learning"}
    detail={"Data Analysis, Machine learning"}
    tool2={"Jupyter Notebook"}
    color="rgba(252, 166, 31, 0.45)"
  />
</motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;