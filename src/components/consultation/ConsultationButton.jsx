import React from "react";
import { FaPhoneAlt } from "react-icons/fa"; // آیکون گفتگو از react-icons

const ConsultationButton = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-2/3 flex items-center justify-center p-1 rounded-xl animated-background bg-gradient-to-r from-[#ffb71b] via-[#ffae00] to-[#ff7301] shadow-[0_0_20px_5px_rgb(255,174,0)]">
      <a
        href="#consultation" // آدرس یا لینک برای مشاوره
        className="w-full p-2 spcae-x-2 space-x-reverse border-4 rounded-xl bg-black/20 backdrop-blur-lg 
        text-white flex items-center justify-center space-x-4 hover:scale-110 transform 
        transition duration-300 overflow-hidden border-t-transparent 
        border-r-transparent border-b-transparent border-l-transparent"
      >
        <FaPhoneAlt className="text-2xl rotate-[270deg]" /> {/* آیکون گفتگو */}
        <span className="font-semibold text-xl">مشاوره با ما</span>
      </a>
      </div>
    </div>
  );
};

export default ConsultationButton;
