import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Whatsapp from "../../img/whatsapp.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './OlubukunSamuelresume.pdf';

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/*  */}
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Samuel Olubukun</span>
          {/* <span> */}
          <ul type="square">
            <li>
            Full Stack Developer with expertise in Software/Web Development, UI/UX, Data Analysis, and Machine Learning.
            </li><br></br>
            <li>
            Exploring new opportunities.
            </li><br></br>
            <li>
            Motivated developer with expertise across diverse programming areas, focused on crafting effective and user-centric solutions.
            </li><br></br><br></br>
            
            {/* <li> 
            Possess excellent communication skills and have an eye for detail.
            </li>
            <li>
            Flexible to work in any field as required.
            </li> */}
            <a href={Resume} download>
                <button className="button ss-button">Download CV</button>
            </a>
            </ul>
          {/* </span> */}
          
       
        {/* social icons */}
        <div className="i-icons">
          <a href='https://github.com/samolubukun' target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="" />
          </a>
          <a href='https://www.linkedin.com/in/samuel-olubukun-50a57a1a9/' target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/buksmi_1/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt=""  />
          </a>
          <a href="https://wa.link/bqx2gh" target="_blank" rel="noopener noreferrer">
            <img src={Whatsapp} alt=""  />
          </a>
        </div>
      </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />

        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Software" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Data Scientist" text2="AI/ML Enthusiast " />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;