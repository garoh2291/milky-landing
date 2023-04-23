import React from "react";
import {
  FooterWrapper,
  LogoWrap,
  PrivacyLink,
  StyledFooter,
  TextWrapper,
} from "../../components/styles/footer.styles";
import { StyledContainer } from "../../components/styles/app.styles";
import logo from "../../assets/logo.png";
import google from "../../assets/gplay.png";
import apple from "../../assets/apstore.png";
import visa from "../../assets/visa.png";
import master from "../../assets/master.png";
import paypal from "../../assets/paypal.png";
import telegram from "../../assets/telegram.png";
import instagram from "../../assets/instagram.png";
import fb from "../../assets/fb.png";
import tiktok from "../../assets/tiktok.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <StyledFooter>
      <StyledContainer>
        <FooterWrapper>
          <LogoWrap>
            <div>
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
              <img src={google} alt="gplay" />
              <img src={apple} alt="apple" />
            </div>
            <div>
              <img src={visa} alt="visa" />
              <img src={master} alt="master" />
              <img src={paypal} alt="paypal" />
            </div>
            <div>
              <a href="/">
                {" "}
                <img src={telegram} alt="tg" />
              </a>
              <a href="/">
                {" "}
                <img src={instagram} alt="insta" />
              </a>
              <a href="/">
                {" "}
                <img src={fb} alt="fb" />
              </a>
              <a href="/">
                {" "}
                <img src={tiktok} alt="tk" />
              </a>
            </div>
          </LogoWrap>
          <TextWrapper>
            <p>{t("footer.mainText")}</p>
          </TextWrapper>
          <PrivacyLink>
            <p>
              18+ {t("footer.company")} {`${new Date().getFullYear()} `}
              {t("footer.milky")}
            </p>
            <Link to={"/privacy-policy"}>{t("footer.privacy")}</Link>
          </PrivacyLink>
        </FooterWrapper>
      </StyledContainer>
    </StyledFooter>
  );
};
