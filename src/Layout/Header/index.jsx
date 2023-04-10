import React, { useState } from "react";
import {
  StyledBar,
  StyledHeader,
  StyledLogo,
  StyledMobileWrap,
} from "../../components/styles/header.styles";
import { StyledContainer } from "../../components/styles/app.styles";
import logo from "../../assets/logo.png";
import { Menu } from "./menu";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const changeState = () => setIsOpened((prev) => !prev);
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledBar>
          <StyledLogo>
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </StyledLogo>
          <StyledMobileWrap>
            <button onClick={changeState}>
              <MenuIcon sx={{ color: "#fff" }} fontSize={"large"} />
            </button>
          </StyledMobileWrap>
          <Menu isOpened={isOpened} cb={changeState} />
        </StyledBar>
      </StyledContainer>
    </StyledHeader>
  );
};
