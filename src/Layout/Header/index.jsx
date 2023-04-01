import React from "react";
import { StyledHeader } from "../../components/styles/header.styles";
import { StyledContainer } from "../../components/styles/app.styles";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <StyledHeader>
      <StyledContainer>
        <img src={logo} alt="" />
        <p>{t("faq.head")}</p>
      </StyledContainer>
    </StyledHeader>
  );
};
