import React, { useRef } from "react";
import { useState } from "react";
import { LangContext } from "..";
import { getLang } from "../../helpers";

export const LangContextProvivder = ({ children }) => {
  const [lang, setLang] = useState(getLang());
  const predict = useRef();
  const newsWrap = useRef();

  const handlePredClick = () => {
    if (predict.current) {
      predict.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsClick = () => {
    if (newsWrap.current) {
      newsWrap.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang,
        predict,
        handlePredClick,
        handleNewsClick,
        newsWrap,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};
