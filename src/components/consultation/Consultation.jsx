import React from "react";
import Title from "./ConsultationTitle";
import Form from "./ConsultationForm";
import ConsultationButton from "./ConsultationButton";
import { useTranslation } from "react-i18next";

const Consultation = () => {
      const { t } = useTranslation();
  
  return (
    <section id="consultation" className="w-full  flex flex-col items-center justify-center">
      <header className="relative w-full">
        <Title title={`${t('consultation')}`} size="24px" circle={false} />
      </header>
      <main className="w-[90%] xl:w-[80%] space-y-8 md:space-y-0 flex flex-col md:flex-row md:justify-between my-20 text-white p-4 py-6 text-justify rounded-lg shadow-lg bg-black/20 backdrop-blur-md border border-white/30">
        <div
          className="w-full md:w-1/2 h-full flex flex-col space-y-20"
        >
          <h3 className="text-center">
            {t('callConsultation')}
          </h3>
          <ConsultationButton />
        </div>
        <Form />
      </main>
    </section>
  );
};

export default Consultation;
