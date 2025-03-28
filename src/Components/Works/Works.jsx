import React, { useContext } from "react";
import "./Works.css";
import Java from "../../img/java.png";
import Html from "../../img/html.png";
import ProgrammingLanguages from "../../img/ProgrammingLanguages.PNG";
import Nodejs from "../../img/nodejs.png";
import SQL from "../../img/sql.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Skills &
          </span>
          <span>Technologies</span>
          <spane>
            <ul type="Square">
            <li>Full Stack Development: PHP, Python (Django),
              <br></br> MERN, HTML/CSS, ReactJS, SQL</li>
              <li>Machine Learning and Aritificial Intelligence</li>
              <li>Data Analysis: Python, Excel, SQL, Tableau, Power BI</li>
              <li>UI/UX Design: Figma, Wireframing, Prototyping, User Research</li>
              <li>Graphic Design: Photoshop, Illustrator </li>

              
              <Link to="contact" smooth={true} spy={true}>
                <button className="button s-button">Hire Me</button>
              </Link>
             
            </ul>
          </spane>
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Java} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Html} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ProgrammingLanguages} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Nodejs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={SQL} alt="" />
          </div>
          
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;