import { useTranslation } from "react-i18next";
import { StyledContainer } from "../styles/app.styles";
import {
  CheckLine,
  EventDetail,
  PromoBanner,
  PromoCheck,
  PromoText,
  PromoWrapper,
  StyledPromo,
} from "../styles/promo.styles";
import * as moment from "moment";
import calendar from "../../assets/calendar.png";
import football from "../../assets/football.png";
import volleyball from "../../assets/volleyball.png";
import { useContext } from "react";
import { LangContext } from "../../context";
import { Link } from "react-router-dom";

export const Promo = () => {
  const { t } = useTranslation();
  const { lang } = useContext(LangContext);
  const data = moment(new Date()).format("DD");
  const month = moment(new Date()).format("MM");
  const time = moment(new Date()).format("HH:mm");
  return (
    <PromoWrapper>
      <StyledContainer>
        <StyledPromo>
          <PromoText fs={lang}>
            <h3>{t("promo.text1")}</h3>
            <h3>
              <span>{t("promo.special")} </span>
              {t("promo.text2")}
            </h3>
            <button>
              <Link to={"/auth"}>{t("promo.join")}</Link>
            </button>
          </PromoText>
          <PromoBanner>
            <p>2x</p>
            <div>
              <div>
                <p>{t("promo.express")}</p>
                <div>
                  <img src={calendar} alt="calendar" />
                  <div>
                    <p>
                      {" "}
                      {data} {t(`month.${month}`)}
                    </p>
                    <p>{time}</p>
                  </div>
                </div>
              </div>
              <PromoCheck>
                <CheckLine>
                  <EventDetail cl={"#00259A"}>{t("promo.type")}</EventDetail>
                  <EventDetail cl={"#00259A"} type={"30%"}>
                    {t("promo.event")}
                  </EventDetail>
                  <EventDetail cl={"#00259A"} type={"35%"}>
                    {t("promo.position")}
                  </EventDetail>
                  <EventDetail cl={"#00259A"} type={"20%"}>
                    {t("promo.cf")}
                  </EventDetail>
                </CheckLine>
                <CheckLine>
                  <EventDetail>
                    <img src={football} alt="sport" />
                  </EventDetail>
                  <EventDetail type={"30%"}>
                    <div>
                      <p>{t("promo.t2")}</p>
                      <p>-</p>
                      <p>{t("promo.t2")}</p>
                    </div>
                  </EventDetail>
                  <EventDetail type={"35%"}>{t("promo.ev1")}</EventDetail>
                  <EventDetail type={"20%"}>1.67</EventDetail>
                </CheckLine>
                <CheckLine>
                  <EventDetail>
                    <img src={volleyball} alt="sport" />
                  </EventDetail>
                  <EventDetail type={"30%"}>
                    <div>
                      <p>{t("promo.t1")}</p>
                      <p>-</p>
                      <p>{t("promo.t2")}</p>
                    </div>
                  </EventDetail>
                  <EventDetail type={"35%"}>{t("promo.ev2")}</EventDetail>
                  <EventDetail type={"20%"}>1.53</EventDetail>
                </CheckLine>
                <div>
                  <button>2.555</button>
                </div>
              </PromoCheck>
            </div>
          </PromoBanner>
        </StyledPromo>
      </StyledContainer>
    </PromoWrapper>
  );
};
