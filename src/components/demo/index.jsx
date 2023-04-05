import { useTranslation } from "react-i18next";
import { StyledContainer } from "../styles/app.styles";
import {
  PromoBanner,
  PromoText,
  PromoWrapper,
  StyledPromo,
} from "../styles/promo.styles";

export const Promo = () => {
  const { t } = useTranslation();
  return (
    <PromoWrapper>
      <StyledContainer>
        <StyledPromo>
          <PromoText>
            <h3>{t("promo.text1")}</h3>
            <h3>
              <span>{t("promo.special")} </span>
              {t("promo.text2")}
            </h3>
            <button>{t("promo.join")}</button>
          </PromoText>
          <PromoBanner>
            <p>2x</p>
            <div>
              <div>
                <p>{t("promo.express")}</p>
              </div>
            </div>
          </PromoBanner>
        </StyledPromo>
      </StyledContainer>
    </PromoWrapper>
  );
};
