import React from "react";
import { useTranslation } from "react-i18next";
import { StyledContainer } from "../styles/app.styles";
import { StyledFaq } from "../styles/faq.styles";
import { FaqContainer } from "./faqContainer";

export const FAQ = () => {
  const { t } = useTranslation();
  return (
    <div>
      <StyledContainer>
        <StyledFaq>
          <h3>{t("faq.head")}</h3>
          <FaqContainer />
        </StyledFaq>
      </StyledContainer>
    </div>
  );
};
