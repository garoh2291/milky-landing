import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  MobileNav,
  StyledJoin,
  StyledLog,
  StyledMenu,
} from "../../components/styles/header.styles";
import { Lang } from "./select";
import { LangContext } from "../../context";

export const Menu = ({ isOpened, cb }) => {
  const { t } = useTranslation();
  const { handleNewsClick, handlePredClick } = useContext(LangContext);
  const newsHandle = () => {
    cb();
    handleNewsClick();
  };
  const predictHandle = () => {
    cb();
    handlePredClick();
  };
  return (
    <StyledMenu opened={isOpened && "flex"}>
      <MobileNav>
        <span onClick={predictHandle}>{t("promo.predicitons")}</span>
        <span onClick={newsHandle}>{t("promo.news")}</span>
      </MobileNav>
      <StyledLog href="/login">{t(`header.login`)}</StyledLog>
      <StyledJoin>{t("header.join")}</StyledJoin>
      <Lang />
    </StyledMenu>
  );
};
