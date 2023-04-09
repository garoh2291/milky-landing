import React from "react";
import {
  StyledBar,
  StyledHeader,
  StyledLogo,
} from "../../components/styles/header.styles";
import { StyledContainer } from "../../components/styles/app.styles";
import logo from "../../assets/logo.png";
import { Menu } from "./menu";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledBar>
          <StyledLogo>
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </StyledLogo>
          <Menu />
        </StyledBar>
      </StyledContainer>
    </StyledHeader>
  );
};
