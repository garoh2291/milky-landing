import React, { useContext } from "react";
import { LangContext } from "../../context";
import {
  ArticleContent,
  ArticleImg,
  ArticleWrap,
  OtherArticles,
} from "../styles/news.styles";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { Link } from "react-router-dom";
import { t } from "i18next";

export const OtherNews = ({ articles }) => {
  const { t } = useTranslation();

  return (
    <OtherArticles>
      <h6>{t("promo.news")}</h6>
      <ArticleWrap>
        {articles.map((article, idx) => (
          <Article key={idx} article={article} />
        ))}
      </ArticleWrap>
    </OtherArticles>
  );
};

export const Article = ({ article }) => {
  const { lang } = useContext(LangContext);

  return (
    <div>
      <ArticleImg bg={article.url}>
        <div>
          <p>{moment(article.date).format("DD MMMM YYYY")}</p>
        </div>
      </ArticleImg>
      <ArticleContent>
        <h6>{article.title[lang]}</h6>
        <p>{article.description[lang]}</p>
        <Link to={`/news/${article.id}`}>{t("promo.more")}</Link>
      </ArticleContent>
    </div>
  );
};
