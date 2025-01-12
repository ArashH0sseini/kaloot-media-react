import React from "react";
import Instagram from "../3dModels/Instagram";
import InstagramId from "./InstagramId";
import Title from "./InstagramTitle";

const FollowInstagram = () => {
  return (
    <section className="w-full xl:w-1/2 flex flex-col items-center justify-center">
      <header className="relative w-full">
        <Title title="اینستاگرام کلوت" size="24px" circle={false} />
      </header>
      <main className="w-[90%] xl:w-[80%] space-y-8 md:space-y-0 flex flex-col my-20 text-white p-4 py-6 text-justify rounded-lg shadow-lg bg-black/20 backdrop-blur-md border border-white/30">
        <Instagram />
        <InstagramId />
      </main>
    </section>
  );
};

export default FollowInstagram;
