import React from "react";
import Cards from "./Cards";
import Title from "../Title";

const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <header className="relative w-full">
        <Title title="خدمات ما" size="30px" circle={true} />
      </header>
      <main className="w-full">
        <Cards />
      </main>
    </section>
  );
};

export default Services;
