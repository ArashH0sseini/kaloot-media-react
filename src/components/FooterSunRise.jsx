import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sunrise from "../assets/images/sunrise.png";

const FooterSunRise = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [linesAnimCompleted, setLinesAnimCompleted] = useState(false);

  // وقتی که انیمیشن خط‌ها تمام می‌شود، عکس نمایش داده شود
  useEffect(() => {
    if (inView) {
      setLinesAnimCompleted(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-center">
        <div className="w-3/5 opacity-75">
          <motion.img
            src={sunrise}
            alt="Sunrise"
            initial={{ scaleY: 0, opacity: 0, height: 0 }}
            animate={{
              scaleY: linesAnimCompleted ? 1 : 0, // از پایین به بالا رشد می‌کند
              opacity: linesAnimCompleted ? 1 : 0, // از صفر به صد تغییر می‌کند
              height: linesAnimCompleted ? "100%" : 0, // افزایش ارتفاع از صفر به صد
              transition: { duration: 1, delay: 1 }, // تأخیر برای هماهنگی انیمیشن‌ها
            }}
            className="w-full object-cover origin-bottom" // استفاده از origin-bottom برای شروع از پایین
          />
        </div>
      </div>
      <div className="space-y-[2px]">
        {Array.from({ length: 10 }).reverse().map((_, index) => (
          <motion.hr
            key={index}
            initial={{ scaleX: 0, opacity: 0.1 }} // شروع از مقیاس صفر و اپاسیتی 10%
            animate={{
              scaleX: inView ? 1 : 0, // زمانی که وارد View شد از وسط باز شود
              opacity: inView ? 0.1 + (9 - index) * 0.1 : 0.1, // اپاسیتی از 10 تا 100
              transition: {
                delay: (9 - index) * 0.1, // تأخیر برای هر خط از پایین به بالا
                duration: 1, // مدت زمان انیمیشن
              },
            }}
            className="w-full h-[1px] shadow-lg border-t border-white bg-white origin-center"
          />
        ))}
      </div>
    </div>
  );
};

export default FooterSunRise;
