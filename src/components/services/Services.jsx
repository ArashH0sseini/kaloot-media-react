import React from "react";
import ServicesCards from "./ServicesCards";
import ServicesTitle from "./ServicesTitle";
import { useTranslation } from "react-i18next";

const Services = () => {
    const { t } = useTranslation();
  
  return (
    <section id="services" className="flex flex-col items-center justify-center">
      <header className="relative w-full">
        <ServicesTitle title={`${t('services')}`} size="30px" circle={true} />
      </header>
      <main className="w-full">
        <ServicesCards />
      </main>
    </section>
  );
};

export default Services;
