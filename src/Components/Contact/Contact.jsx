  import React, { useContext, useRef, useState } from "react";
  import "./Contact.css";
  import emailjs from "@emailjs/browser";
  import { themeContext } from "../../Context";

  const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
      .sendForm('service_c3xjvde', 'template_i1yaf8u', form.current, 'Y9A0f7XzoMs-nRLRt')
      .then(
        () => {
          console.log('SUCCESS! Email sent.');
          setDone(true);
          e.target.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email. Please try again later.'); // Notify user of failure
        },
      );
  };


    return (
      <div className="contact-form" id="contact">
        <div className="w-left">
          <div className="awesome">
            <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
            <span>Contact me</span>
            <span className="text1">
              I'm currently open to opportunities to work as a Software Developer,
              UI/UX Designer, Data Scientist.
              <br />
              Let's get in touch and talk more about your projects and ideas.
            </span>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
          </div>
        </div>
        <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
  <input
    type="text"
    name="user_name"
    className="user"
    placeholder="Name"
    required
    style={{ backgroundColor: "lightgray" }}
  />
  <input
    type="email"
    name="user_email"
    className="user"
    placeholder="Email"
    required
    style={{ backgroundColor: "lightgray" }}
  />
  <textarea
    name="message"
    className="user"
    placeholder="Message"
    required
    style={{ backgroundColor: "lightgray" }}
  />
  <input type="submit" value="Send" className="button" />
  <span>{done && "Thanks for contacting me!"}</span>
  <div
    className="blur c-blur1"
    style={{ background: "var(--blue)" }}
  ></div>
</form>

        </div>
      </div>
    );
  };

  export default Contact;
