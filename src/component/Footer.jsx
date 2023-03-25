import React from "react";
import { Container } from "@mui/system";
import "../App.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container maxWidth="lg" className="container">
          <div className="left-footer">
            <div className="logo">
              <h1>Q</h1>
              <span>inema</span>
            </div>
            <p>
              Explore a vast selection of high-quality movies from around the
              world on our user-friendly website.
            </p>
          </div>
          <div className="right-footer">
            <div className="copyright">
              <p>@Copyright 2023 by Qinema</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
