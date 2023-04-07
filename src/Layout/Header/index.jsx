import React from "react";
import {
  StyledBar,
  StyledHeader,
  StyledLogo,
} from "../../components/styles/header.styles";
import { StyledContainer } from "../../components/styles/app.styles";
import logo from "../../assets/logo.png";
import { Menu } from "./menu";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledBar>
          <StyledLogo>
            <img src={logo} alt="logo" />
          </StyledLogo>
          <Menu />
        </StyledBar>
      </StyledContainer>
    </StyledHeader>
  );
};
