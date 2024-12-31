import React from "react";
import Copyright from "./Copyright";
import FooterSunRise from "./FooterSunRise";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
    <footer>
        <FooterSunRise />
        <FooterInfo />
        <Copyright />
    </footer>
  );
};

export default Footer;
