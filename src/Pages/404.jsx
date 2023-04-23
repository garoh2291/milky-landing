import React from "react";
import { StyledContainer } from "../components/styles/app.styles";
import { StyledBtn, StyledOtherWrap } from "../components/styles/other.styles";
import { Link } from "react-router-dom";
import notFound from "../assets/404.png";
import { useTranslation } from "react-i18next";

export const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <StyledContainer>
        <StyledOtherWrap
          style={{
            backgroundImage: `url(${notFound})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></StyledOtherWrap>
        <StyledBtn style={{ marginTop: "30px" }}>
          <button>
            <Link to={"/"}>{t("main.mainPage")}</Link>
          </button>
        </StyledBtn>
      </StyledContainer>
    </div>
  );
};
