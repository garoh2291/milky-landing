import React from "react";
import { useState } from "react";
import { LangContext } from "..";
import { getLang } from "../../helpers";

export const LangContextProvivder = ({ children }) => {
  const [lang, setLang] = useState(getLang());

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
