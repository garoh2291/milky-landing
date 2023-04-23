import React from "react";
import { StyledContainer } from "../components/styles/app.styles";
import {
  StyledBtn,
  StyledOtherWrap,
  StyledSooon,
} from "../components/styles/other.styles";
import comming from "../assets/coming3.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const CommingSoon = () => {
  const { t } = useTranslation();
  return (
    <div>
      <StyledContainer>
        <StyledSooon>{t("main.soon")}</StyledSooon>
        <StyledOtherWrap
          style={{
            backgroundImage: `url(${comming})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></StyledOtherWrap>
        <StyledBtn>
          <button>
            <Link to={"/"}>{t("main.mainPage")}</Link>
          </button>
        </StyledBtn>
      </StyledContainer>
    </div>
  );
};
