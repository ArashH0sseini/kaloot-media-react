import React from "react";
import Cards from "./Cards";
import Title from "../Title";

const Services = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Title title="خدمات ما" size="30px" circle={true} />
      <Cards />
    </div>
  );
};

export default Services;
