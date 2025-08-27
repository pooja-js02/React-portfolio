// components/Home/Home.js
import React, { useEffect } from "react";
import Typed from "typed.js";
import Particle from "../components/Particle";
import Home2 from "./Home2";

import "./Home.css";
import HomeImg from "../assets/wdev.jpg"
// A waving hand icon

const Home = () => {
  useEffect(() => {
    // Initialize the Typed.js library
    const typed = new Typed(".content2", {
      strings: ["I'm a Frontend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });

    // Clean up on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>


      <div className="container">
        {/* Left Container */}
        <div className="left-container">
          <Particle />
          <p>
            Hi{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>{" "}
            My Name is Pooja Joshi
          </p><br />
          <p>
            <span className="content2"></span>
          </p>
          <p className="content4">I build things for the Web.</p>
        </div>

        {/* Right Container */}
        <div className="right-container">
          <img
            src={HomeImg}
            alt="Coding Animation"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />



        </div>

      </div>
      <Home2 />
    </>
  );
};

export default Home;
