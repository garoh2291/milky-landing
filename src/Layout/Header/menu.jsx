import React from "react";
import { useTranslation } from "react-i18next";
import {
  MobileNav,
  StyledJoin,
  StyledLog,
  StyledMenu,
} from "../../components/styles/header.styles";
import { Lang } from "./select";
import { Link } from "react-router-dom";

export const Menu = ({ isOpened, cb }) => {
  const { t } = useTranslation();

  return (
    <StyledMenu opened={isOpened && "flex"}>
      <MobileNav>
        <Link to={"/news"} onClick={cb}>
          {t("promo.news")}
        </Link>
      </MobileNav>
      <StyledLog>
        <Link to="/auth" onClick={cb}>
          {t(`header.login`)}
        </Link>
      </StyledLog>
      <StyledJoin>
        <Link to={"/auth"} onClick={cb}>
          {t("header.join")}
        </Link>
      </StyledJoin>
      <Lang cb={cb} />
    </StyledMenu>
  );
};
