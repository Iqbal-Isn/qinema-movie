import React from "react";
import "../App.css";
import { Container } from "@mui/system";
const About = () => {
  return (
    <>
      <div className="about">
        <Container>
          <h2>About Us</h2>
          <p>
            Welcome to Qinema! We are the team of developers and managers behind
            this site, consisting of movie and technology enthusiasts. We
            started this website because we wanted to provide easy and quick
            access to high-quality movies for everyone. <br />
            <br /> We highly value quality and integrity in everything we do.
            With the goal of building a reliable website, we conduct careful
            research and testing to ensure that every movie we feature on this
            site meets high-quality standards. We also ensure that the site is
            designed and managed with care to provide the best experience for
            our users. <br /> <br />
            We are committed to providing access to the latest and best movies
            from around the world. With a continuously updated and diverse
            collection of films, we are confident that every user will find a
            movie that suits their taste and preferences. We also provide
            accurate and useful information about each movie we feature,
            including reviews, ratings, and trailers, to help our users make
            informed decisions before watching a movie.
          </p>
        </Container>
      </div>
    </>
  );
};

export default About;
