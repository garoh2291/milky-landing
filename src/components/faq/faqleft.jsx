import React from "react";
import { useTranslation } from "react-i18next";
import { FaqItem } from "./faqItem";

export const Faqleft = () => {
  const { t } = useTranslation();

  return (
    <div style={{ width: "49%" }}>
      <FaqItem head={t("faq.faq1q")} body={t("faq.faq1a")} />
      <FaqItem head={t("faq.faq2q")} body={t("faq.faq2a")} />
      <FaqItem head={t("faq.faq3q")} body={t("faq.faq3a")} />
      <FaqItem head={t("faq.faq4q")} body={t("faq.faq4a")} />
      <FaqItem head={t("faq.faq5q")} body={t("faq.faq5a")} />
    </div>
  );
};
