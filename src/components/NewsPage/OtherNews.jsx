import { useTranslation } from "react-i18next";
import { OtherArticleWrap, OtherWrap } from "../styles/single.styles";
import { LangContext } from "../../context";
import { useContext } from "react";
import { ArticleContent, ArticleImg } from "../styles/news.styles";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

export const OtherNews = ({ news }) => {
  const { t } = useTranslation();

  if (!news) {
    return (
      <OtherArticleWrap
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
        }}
      >
        <CircularProgress />
      </OtherArticleWrap>
    );
  }

  return (
    <OtherArticleWrap>
      <h6>{t("promo.news")}</h6>
      <OtherWrap>
        {news.map((article, idx) => (
          <OtherSingle key={idx} article={article} />
        ))}
      </OtherWrap>
    </OtherArticleWrap>
  );
};

export const OtherSingle = ({ article }) => {
  const { lang } = useContext(LangContext);
  const { t } = useTranslation();

  return (
    <Link to={`/news/${article._id}`}>
      <ArticleImg bg={article.image}>
        <div>
          <p>{moment(article.createdAt).format("DD MMMM YYYY")}</p>
        </div>
      </ArticleImg>
      <ArticleContent>
        <h6>{article.title[lang]}</h6>
        <p>{article.description[lang]}</p>
        <span>{t("promo.more")}</span>
      </ArticleContent>
    </Link>
  );
};
