import React, { useContext } from "react";
import { StyledContainer } from "../styles/app.styles";
import sport from "../../assets/sport.png";
import {
  MainWrapper,
  StyledExplore,
  StyledImage,
  StyledMain,
} from "../styles/main.styles";
import { useTranslation } from "react-i18next";
import { LangContext } from "../../context";

export const Main = () => {
  const { lang } = useContext(LangContext);
  const { t } = useTranslation();
  return (
    <StyledMain>
      <StyledContainer>
        <MainWrapper>
          <StyledExplore fs={lang === "am" && "42px"}>
            <h2>{t("main.prediction1")}</h2>
            <p>{t("main.prediction4")}</p>
            <button>{t("main.button")}</button>
          </StyledExplore>
          <StyledImage>
            <img src={sport} alt="sport" />
          </StyledImage>
        </MainWrapper>
      </StyledContainer>
    </StyledMain>
  );
};
