import { Suspense, useState, lazy, useEffect } from "react";
import Loading from "./components/Loading";
import i18n from "./helpers/i18n";

const Main = lazy(() => import("./components/Main"));

const App = () => {

  const changeDirection = (lang) => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  };

  useEffect(() => {
    changeDirection(i18n.language);

    const handleLanguageChange = (lang) => {
      changeDirection(lang);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Main />
    </Suspense>
  );
};

export default App;
