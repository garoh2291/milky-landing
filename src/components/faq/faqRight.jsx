import { useTranslation } from "react-i18next";
import { FaqItem } from "./faqItem";
import { StyledSideFaq } from "../styles/faq.styles";

export const FaqRight = () => {
  const { t } = useTranslation();

  return (
    <StyledSideFaq>
      <FaqItem head={t("faq.faq6q")} body={t("faq.faq6a")} />
      <FaqItem head={t("faq.faq7q")} body={t("faq.faq7a")} />
      <FaqItem head={t("faq.faq8q")} body={t("faq.faq8a")} />
      <FaqItem head={t("faq.faq9q")} body={t("faq.faq9a")} />
      <FaqItem head={t("faq.faq10q")} body={t("faq.faq10a")} />
    </StyledSideFaq>
  );
};
