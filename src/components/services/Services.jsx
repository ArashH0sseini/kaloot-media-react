import React from "react";
import ServicesCards from "./ServicesCards";
import ServicesTitle from "./ServicesTitle";

const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <header className="relative w-full">
        <ServicesTitle title="خدمات ما" size="30px" circle={true} />
      </header>
      <main className="w-full">
        <ServicesCards />
      </main>
    </section>
  );
};

export default Services;
