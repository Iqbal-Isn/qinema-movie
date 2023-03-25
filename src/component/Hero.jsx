import React from "react";
import banner from "../img/banner.jpg";
import "../App.css";
import { Container } from "@mui/system";

const Hero = () => {
  return (
    <>
      <div className="hero" style={{ backgroundImage: banner }}>
        <Container>
          <div className="hero-content">
            <h2>High-quality movies, easy accessibility.</h2>
            <p>
              Explore a vast selection of high-quality movies from around the
              world on our user-friendly website.
            </p>
            <button>Get Started</button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
