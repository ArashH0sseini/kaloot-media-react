import React from "react";
import Footer from "../footer/Footer";
import kalootLogo from "../../assets/images/kaloot-logo.png";
import background from "../../assets/images/content.png";
import WhiteBoard from "../3dModels/WhiteBoard";
import { Link } from "react-router-dom";

const CampaignPage = () => {
  return (
    <div className="w-full absolute top-0 bg-gradient-to-b from-[rgb(0,0,0)] to-[#C60A0A]">
      <div className="absolute z-0 opacity-10 w-full h-[1100px]">
        <img src={background} alt="" className="w-full h-full object-cover object-bottom" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#860808] pointer-events-none"></div>
      </div>
      <div className="max-w-sm m-auto p-5 text-white z-10">
        <header>
        <Link to="/">
          <div className="w-[60px] h-[60px] animate-pulse shadow-[0_0_25px_2px_rgb(255,255,255)] bg-white bg-opacity-100 rounded-full">
            <img src={kalootLogo} alt="logo" />
          </div>
        </Link>
          <div className="flex flex-col my-6 space-y-4 items-center justify-center ">
            <h1 className="font-bold text-[40px]">کمپین تبلیغاتی</h1>
            <h2 className="text-xl leading-10 text-justify">
              شما یک برند شگفت‌انگیز هستید، اما آیا مخاطبانتان هم همین را
              می‌دانند؟ ما اینجاییم تا کاری کنیم که شما نه‌تنها دیده شوید، بلکه
              درخشان باشید!
            </h2>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <WhiteBoard />
          </div>
        </header>
        <main className="my-8">
          <div className="flex flex-col items-center justify-center space-y-3">
            <h3 className="text-[30px] font-bold text-[#FF7B6E]">
              کمپین تبلیغاتی چیست؟
            </h3>
            <h4 className="text-lg text-justify leading-7">
              کمپین، مجموعه‌ای منسجم و هدفمند از محتواهای تبلیغاتی است که به
              صورت دیجیتال یا میدانی طراحی و اجرا می‌شود تا یک پیام مشخص را به
              مخاطبان منتقل کند. این پیام می‌تواند الهام‌بخش، اطلاع‌رسان یا
              ترغیب‌کننده باشد و از طریق ترکیبی از کانال‌ها و روش‌های ارتباطی
              مختلف به گونه‌ای ارائه می‌شود که تأثیری ماندگار بر ذهن و احساسات
              مخاطب بگذارد. هدف اصلی کمپین، ایجاد ارتباطی مؤثر و عمیق با مخاطبان
              است تا آن‌ها را به واکنش یا اقدامی خاص ترغیب کند، خواه خرید یک
              محصول باشد یا پیوستن به یک حرکت اجتماعی.
            </h4>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6">
            <h3 className="text-[30px] font-bold text-[#FF7B6E] text-center">
              چرا ما بهترین انتخاب برای شما هستیم؟
            </h3>
            <div>
              <h4 className="font-bold text-[20px] text-center">
                استراتژی خاص برند شما
              </h4>
              <h5 className="text-lg text-justify leading-7">
                هر برند داستان خودش را دارد. ما به شما گوش می‌دهیم، داستان شما
                را کشف می‌کنیم و یک استراتژی منحصربه‌فرد می‌سازیم که مخصوص
                شماست.
              </h5>
            </div>
            <div>
              <h4 className="font-bold text-[20px] text-center">
                محتوای خلاقانه و چشم‌نواز
              </h4>
              <h5 className="text-lg text-justify leading-7">
                از طراحی گرافیک‌های خیره‌کننده تا تولید ویدیوهایی که در چند
                ثانیه مخاطبان را جذب کند، تیم ما همه‌چیز را برای برند شما خلق
                می‌کند.
              </h5>
            </div>
            <div>
              <h4 className="font-bold text-[20px] text-center">
                مدیریت حرفه‌ای شبکه‌های اجتماعی
              </h4>
              <h5 className="text-lg text-justify leading-7">
                ما حضورتان را در شبکه‌های اجتماعی مثل اینستاگرام، لینکدین یا حتی
                تیک‌تاک مدیریت می‌کنیم تا مطمئن شویم هر پست شما تأثیرگذار است.
              </h5>
            </div>
            <div>
              <h4 className="font-bold text-[20px] text-center">
                تحلیل و بهینه‌سازی مداوم
              </h4>
              <h5 className="text-lg text-justify leading-7">
                ما هیچ‌وقت دست از کار نمی‌کشیم. با تحلیل داده‌ها، نتایج را
                می‌سنجیم و کمپین شما را بهتر و بهتر می‌کنیم.
              </h5>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CampaignPage;
