import React from "react";

const MagazineStarRating = ({ rating, maxStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = maxStars - fullStars;

  return (
    <div className="flex items-center space-x-2 space-x-reverse">
      {Array.from({ length: fullStars }).map((_, index) => (
        <svg
          key={`full-${index}`}
          className="w-6 h-6 text-[#ffae00]"
          style={{ filter: "drop-shadow(0px 0px 8px rgb(255, 174, 0))" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.415 8.232L12 18.902l-7.415 4.598L6 15.268 0 9.423l8.332-1.268z" />
        </svg>
      ))}


      {Array.from({ length: emptyStars }).map((_, index) => (
        <svg
          key={`empty-${index}`}
          className="w-6 h-6 text-white/80"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.415 8.232L12 18.902l-7.415 4.598L6 15.268 0 9.423l8.332-1.268z" />
        </svg>
      ))}
    </div>
  );
};

export default MagazineStarRating;
