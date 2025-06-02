import React from "react";
import Tilt from "react-parallax-tilt";
import IntroImage from "../assets/intro.gif"; // Update with your image path


// import myImg from "../../Assets/avatar.svg";
import "./Home2.css"; // Import the CSS file

function Home2() {
  return (
    <div className="home-about-section" id="about">
      <div className="home-about-container">
        <div className="home-about-content">
          <h1 className="home-about-title">
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
          I fell in love with programming and have enjoyed every step of my learning journey so far. 🤷‍♂️
            <br />
            <br />I am fluent in classics like
            <i>
              <b className="purple">  C++, JavaScript, and HTML/CSS. </b>
            </i>
            <br />
            <br />
            My field of interest lies in building&nbsp;
            <i>
              <b className="purple">modern web technologies </b> and
               user-friendly  <b className="purple">interfaces.</b>
            </i>
            <br />
            <br />
            Whenever possible, I apply my passion for developing products 
            with <b className="purple">React.js</b> ,
            <i>
            crafting
              <b className="purple">  responsive designs</b>
            </i>
            &nbsp; and leveraging
            <i>
              <b className="purple">  JavaScript</b> to create <b className="purple">  seamless </b>and <b className="purple"> dynamic</b> user experiences.
            </i>
          </p>
        </div>
        <div className="home-about-avatar">
          <Tilt>
            <img src={IntroImage} className="img-fluid" alt="avatar" />
          </Tilt>
        </div>
      </div>
     
    </div>
  );
}

export default Home2;
