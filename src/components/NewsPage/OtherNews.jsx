import { useTranslation } from "react-i18next";
import { OtherArticleWrap, OtherWrap } from "../styles/single.styles";
import { LangContext } from "../../context";
import { useContext } from "react";
import { ArticleContent, ArticleImg } from "../styles/news.styles";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

export const OtherNews = ({ news, handleClick }) => {
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
          <OtherSingle key={idx} article={article} handleClick={handleClick} />
        ))}
      </OtherWrap>
    </OtherArticleWrap>
  );
};

export const OtherSingle = ({ article, handleClick }) => {
  const { lang } = useContext(LangContext);
  const { t } = useTranslation();

  return (
    <div>
      <ArticleImg bg={article.image}>
        <div>
          <p>{moment(article.date).format("DD MMMM YYYY")}</p>
        </div>
      </ArticleImg>
      <ArticleContent>
        <h6>{article.title[lang]}</h6>
        <p>{article.description[lang]}</p>
        <Link to={`/news/${article._id}`} onClick={handleClick}>
          {t("promo.more")}
        </Link>
      </ArticleContent>
    </div>
  );
};
