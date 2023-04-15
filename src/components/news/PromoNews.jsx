import { useContext } from "react";
import { LangContext } from "../../context";
import {
  PromoNewsDesc,
  PromoPhoto,
  PromoWrapper,
  ReadMore,
} from "../styles/news.styles";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const PromoNews = ({ article }) => {
  const { t } = useTranslation();
  const { lang } = useContext(LangContext);
  return (
    <PromoWrapper>
      <PromoPhoto photo={article.image}>
        <div>
          <p>{moment(article.date).format("DD MMMM YYYY")}</p>
        </div>
      </PromoPhoto>
      <PromoNewsDesc>
        <h6>{article.title[lang]}</h6>
        <p>{article.description[lang]}</p>
      </PromoNewsDesc>
      <ReadMore>
        <Link to={`/news/${article._id}`}>{t("promo.more")}</Link>
      </ReadMore>
    </PromoWrapper>
  );
};
