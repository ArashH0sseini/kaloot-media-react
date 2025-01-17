import React from "react";
import MagazineCards from "./MagazineCards";

const Magazine = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <header className="relative w-full">
        {/* <MagazineTitle title="کلوت مگ" size="30px" circle={true} /> */}
      </header>
      <main className="w-full">
        <MagazineCards />
      </main>
    </section>
  );
};

export default Magazine;
