import React from "react";
import content from "../../assets/images/content.png";
import effect from "../../assets/images/effect.png";
import imaging from "../../assets/images/imaging.png";
import motion from "../../assets/images/motion.png";
import MagazineCard from "./MagazineCard";
import cover from '../../assets/images/cover.jpg'


const MagazineCards = () => {
  const images = [
    { id: 1, src: cover, alt: "content", title: "هوش مصنوعی سورا", link:"/campaigns" },
    { id: 2, src: effect, alt: "effect", title: "جلوه های ویژه", link:"/vfx" },
    { id: 3, src: imaging, alt: "imaging", title: "تصویر برداری", link:"/Video" },
    { id: 4, src: motion, alt: "motion", title: "موشن گرافیک", link:"/motion" },
  ];

  return (
    <div className="w-full my-2 p-8">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 justify-items-center items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg">
        {images.map((image) => (
          <MagazineCard
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

export default MagazineCards;
