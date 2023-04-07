import React from "react";
import { useTranslation } from "react-i18next";
import {
  StyledJoin,
  StyledLog,
  StyledMenu,
} from "../../components/styles/header.styles";
import { Lang } from "./select";

export const Menu = () => {
  const { t } = useTranslation();
  return (
    <StyledMenu>
      <StyledLog href="/login">{t(`header.login`)}</StyledLog>
      <StyledJoin>{t("header.join")}</StyledJoin>
      <Lang />
    </StyledMenu>
  );
};
