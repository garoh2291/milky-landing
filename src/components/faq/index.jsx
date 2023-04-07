import React from "react";
import { useTranslation } from "react-i18next";
import { StyledContainer } from "../styles/app.styles";
import { StyledFaq } from "../styles/faq.styles";

export const FAQ = () => {
  const { t } = useTranslation();
  return (
    <div>
      <StyledContainer>
        <StyledFaq>
          <h3>{t("faq.head")}</h3>
        </StyledFaq>
      </StyledContainer>
    </div>
  );
};
