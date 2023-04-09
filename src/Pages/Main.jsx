import React from "react";
import { Main } from "../components/Main";
import { Predictions } from "../components/Predictions";
import { Promo } from "../components/demo";
import { News } from "../components/news";
import { FAQ } from "../components/faq";

export const MainPage = () => {
  return (
    <>
      <Main />
      <Predictions />
      <Promo />
      <News />
      <FAQ />
    </>
  );
};
