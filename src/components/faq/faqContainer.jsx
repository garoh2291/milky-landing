import { useTranslation } from "react-i18next";
import { FaqItem } from "./faqItem";

export const FaqContainer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <FaqItem head={t("faq.faq1q")} body={t("faq.faq1a")} />
      <FaqItem head={t("faq.faq2q")} body={t("faq.faq2a")} />
      <FaqItem head={t("faq.faq3q")} body={t("faq.faq3a")} />
      <FaqItem head={t("faq.faq4q")} body={t("faq.faq4a")} />
      <FaqItem head={t("faq.faq5q")} body={t("faq.faq5a")} />
      <FaqItem head={t("faq.faq6q")} body={t("faq.faq6a")} />
      <FaqItem head={t("faq.faq7q")} body={t("faq.faq7a")} />
      <FaqItem head={t("faq.faq8q")} body={t("faq.faq8a")} />
      <FaqItem head={t("faq.faq9q")} body={t("faq.faq9a")} />
      <FaqItem head={t("faq.faq10q")} body={t("faq.faq10a")} />
    </div>
  );
};
