import { useTranslation } from "react-i18next";
import { OtherArticleWrap, OtherWrap } from "../styles/single.styles";
import { LangContext } from "../../context";
import { useContext } from "react";
import { ArticleContent, ArticleImg } from "../styles/news.styles";
import moment from "moment";

export const OtherNews = ({ news, handleClick }) => {
  const { t } = useTranslation();

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
      <ArticleImg bg={article.url}>
        <div>
          <p>{moment(article.date).format("DD MMMM YYYY")}</p>
        </div>
      </ArticleImg>
      <ArticleContent>
        <h6>{article.title[lang]}</h6>
        <p>{article.description[lang]}</p>
        <span onClick={() => handleClick(article)}>{t("promo.more")}</span>
      </ArticleContent>
    </div>
  );
};
