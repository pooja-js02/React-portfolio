import React from "react";
import "./Contact.css";
import ContactImg from "../assets/contact.png";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-form">
          <h2>
            Let's <span>talk</span>
          </h2>
          <p>
          Hello there! Thank you for exploring my portfolio. As a budding frontend developer eager to grow and contribute, I'm thrilled to connect with fellow enthusiasts, mentors, and potential collaborators. Don't hesitate to reach out if you have questions, feedback, or exciting opportunities to share. You can contact me through the following channels:
          </p>
          <form>
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <textarea placeholder="Your Message" className="form-textarea"></textarea>
            <button type="submit" href="" className="submit-button">
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="contact-image">
          <img src={ContactImg} alt="Contact" />
        </div>
        
      </div>
       <div className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/pooja-js02"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/pooja-joshi-94b088222/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/_ipoojajoshi_"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </div>
    </section>
  );
};

export default Contact;
