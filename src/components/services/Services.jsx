import React from "react";
import Cards from "./Cards";
import Title from "../Title";

const Services = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Title title="خدمات ما" size="30px" height="3200px" />
      <Cards />
    </div>
  );
};

export default Services;
