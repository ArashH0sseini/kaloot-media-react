import React from "react";
import Title from "../Title";
import Form from "./Form";
import ConsultationButton from "./ConsultationButton";

const ConsultationForm = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <header className="relative w-full">
        <Title title="مشاوره تخصصی" size="24px" circle={false} />
      </header>
      <main className="w-[90%] lg:w-[80%] space-y-8 md:space-y-0 flex flex-col md:flex-row md:justify-between md:items-center my-20 text-white p-4 py-6 text-justify rounded-lg shadow-lg bg-black/20 backdrop-blur-md border border-white/30">
        <div
          className="w-full md:w-1/2 flex flex-col 
        items-center justify-center space-y-10"
        >
          <h3 className="text-center">
            اگه نیاز به مشاوره تخصصی در زمینه تبلیغات کسب و کارت داشتی میتونی با
            زدن دکمه زیر باهامون در تماس باشی
          </h3>
          <ConsultationButton />
        </div>
        <Form />
      </main>
    </section>
  );
};

export default ConsultationForm;
