import React, { useState } from "react";
import TypeIt from "typeit-react";
import kalootLogo from "../../assets/images/kaloot-logo.png";
import persian from "../../assets/images/persian.png";
import english from "../../assets/images/english.png";
import { useTranslation } from "react-i18next";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [langVersion, setLangVersion] = useState(0);

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang).then(() => {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
      setLangVersion((prev) => prev + 1);
    });
  };

  return (
    <header
      id="header"
      className="flex flex-col px-12 items-center justify-center p-10 md:max-w-[90%] sm:m-auto lg:flex-row-reverse lg:justify-center"
    >
      <div className="relative hidden lg:block">
        <div className="w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] animate-pulse shadow-[0_0_25px_10px_rgb(255,255,255)] bg-white bg-opacity-80 rounded-full"></div>
        <div className="absolute top-0">
          <img src={kalootLogo} alt="logo" />
        </div>
      </div>

      <div className="w-full flex items-center justify-between lg:hidden">
        <div className="text-white">
          <IoMenu className="text-5xl" />
        </div>
        <div className="relative">
          <div className="w-[120px] h-[120px] animate-pulse shadow-[0_0_25px_10px_rgb(255,255,255)] bg-white bg-opacity-80 rounded-full"></div>
          <div className="absolute top-0">
            <img src={kalootLogo} alt="logo" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => switchLanguage("en")}
            className="w-12 h-12 hover:p-1"
          >
            <img src={english} alt="english" />
          </button>
          <button
            onClick={() => switchLanguage("fa")}
            className="w-12 h-12 hover:p-1"
          >
            <img src={persian} alt="persian" />
          </button>
        </div>
      </div>

      <div className="w-full lg:w-3/4 h-40">
        <nav className="my-4">
          <ul className="flex items-start justify-start space-x-4 rtl:space-x-reverse text-white cursor-pointer">
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-4 lg:rtl:space-x-reverse">
              <li className="hover:bg-white/10 bg-black/10 backdrop-blur-lg border border-white/40 hover:border-white/20 rounded-xl shadow-lg p-2 px-3">
                {t("home")}
              </li>
              <Link
                to="services"
                smooth={true}
                duration={1000}
                offset={-50}
                className="text-white"
              >
                <li className="hover:bg-white/10 bg-black/10 backdrop-blur-lg border border-white/40 hover:border-white/20 rounded-xl shadow-lg p-2 px-3">
                  {t("services")}
                </li>
              </Link>
              <Link
                to="consultation"
                smooth={true}
                duration={1000}
                offset={-50}
                className="text-white"
              >
                <li className="hover:bg-white/10 bg-black/10 backdrop-blur-lg border border-white/40 hover:border-white/20 rounded-xl shadow-lg p-2 px-3">
                  {t("consultation")}
                </li>
              </Link>
              <Link
                to="mag"
                smooth={true}
                duration={1000}
                offset={-50}
                className="text-white"
              >
                <li className="hover:bg-white/10 bg-black/10 backdrop-blur-lg border border-white/40 hover:border-white/20 rounded-xl shadow-lg p-2 px-3">
                  {t("mag")}
                </li>
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <li>
                <button
                  onClick={() => switchLanguage("en")}
                  className="w-12 h-12 hover:p-1"
                >
                  <img src={english} alt="english" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => switchLanguage("fa")}
                  className="w-12 h-12 hover:p-1"
                >
                  <img src={persian} alt="persian" />
                </button>
              </li>
            </div>
          </ul>
        </nav>
        <TypeIt
          key={langVersion}
          className="text-white leading-[50px] md:leading-[55px] lg:leading-[60px] text-center sm:text-start md:text-justify"
          options={{
            strings: [
              `<span class="text-3xl sm:text-4xl lg:text-5xl font-extrabold">${t(
                "kaloot"
              )}</span>`,
              `<span class="text-2xl lg:text-3xl font-medium">${t(
                "slogan"
              )}</span>`,
            ],
            speed: 40,
            loop: false,
            cursor: true,
          }}
        />
      </div>
    </header>
  );
};

export default Header;
