import React from "react";
import Title from "../Title";
import Form from "./Form";
import ConsultationButton from "./ConsultationButton";

const Consultation = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Title title="مشاوره اختصاصی" size="24px" circle={false} />
      <div className="w-full my-20 text-white p-4 text-justify space-y-8">
        <h3 className="text-center">
          اگه نیاز به مشاوره تخصصی در زمینه تبلیغات کسب و کارت داشتی میتونی با
          زدن دکمه زیر باهامون در تماس باشی
        </h3>
        <ConsultationButton />
        <h3 className="text-center">
          یا با پر کردن فرم زیر در اولین فرصت باهات تماس میگیریم{" "}
        </h3>
        <Form />
      </div>
    </div>
  );
};

export default Consultation;
