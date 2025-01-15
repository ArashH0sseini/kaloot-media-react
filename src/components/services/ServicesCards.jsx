import React from "react";
import ServicesCard from "./ServicesCard";
import content from "../../assets/images/content.png";
import effect from "../../assets/images/effect.png";
import imaging from "../../assets/images/imaging.png";
import motion from "../../assets/images/motion.png";

const ServicesCards = () => {
  const images = [
    { id: 1, src: content, alt: "content", title: "کمپین تبلیغاتی", link:"/campaigns" },
    { id: 2, src: effect, alt: "effect", title: "جلوه های ویژه", link:"/vfx" },
    { id: 3, src: imaging, alt: "imaging", title: "تصویر برداری", link:"/Video" },
    { id: 4, src: motion, alt: "motion", title: "موشن گرافیک", link:"/motion" },
  ];

  return (
    <div className="w-full my-2 p-8">
      <div className="border-2 p-10 rounded-[80px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 justify-items-center items-center">
        {images.map((image) => (
          <ServicesCard
            img={image.src}
            alt={image.alt}
            title={image.title}
            id={image.id}
            link={image.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;