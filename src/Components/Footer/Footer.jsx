import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { UilLinkedin, UilGithub, UilInstagram, UilFacebook, UilEnvelopeAlt, UilWhatsapp } from '@iconscout/react-unicons'; // Import WhatsApp icon

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span><UilEnvelopeAlt color="white" size={"1.5rem"} /></span>
        <span>samuelolubukun@gmail.com</span>
        <br />
        <br />
        <br />
        <div className="f-icons">

          <a href='https://www.linkedin.com/in/samuel-olubukun-50a57a1a9/' target="_blank" rel="noopener noreferrer">
            <UilLinkedin color="white" size={"3rem"} />
          </a>

          <a href='https://github.com/samolubukun' target="_blank" rel="noopener noreferrer">
            <UilGithub color="white" size={"3rem"} />
          </a>

          <a href="https://www.instagram.com/buksmi_1/" target="_blank" rel="noopener noreferrer">
            <UilInstagram color="white" size={"3rem"} />
          </a>

          {/* Add WhatsApp link */}
          <a href="https://wa.link/bqx2gh" target="_blank" rel="noopener noreferrer">
            <UilWhatsapp color="white" size={"3rem"} />
          </a>

        </div>
        
      </div>
    </div>
  );
};

export default Footer;
