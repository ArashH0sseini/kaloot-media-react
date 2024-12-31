import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./Pages";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Container, Hamburger } from "./styles";

const Main = () => {
  return (
    <Router>
      <Container>
        <div className="w-full absolute top-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] via-[rgb(255,65,65)] to-[rgb(0,0,0)]">
          <Header />
            <Pages />
          <Footer />
        </div>
      </Container>
    </Router>
  );
};

export default Main;
