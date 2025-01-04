import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Container, Hamburger } from "../helpers/styles";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Container>
      <div className="w-full absolute top-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] via-[rgb(255,65,65)] to-[rgb(0,0,0)]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Container>
  );
};

export default Main;
