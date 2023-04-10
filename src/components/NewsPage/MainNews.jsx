import { MainArtDesc, MainArticle, MainPhoto } from "../styles/single.styles";
import moment from "moment";
import { useContext } from "react";
import { LangContext } from "../../context";

export const MainNews = ({ article, mainNews }) => {
  const { lang } = useContext(LangContext);
  return (
    <MainArticle ref={mainNews}>
      <MainPhoto photo={article.url}>
        <div>
          <p>{moment(article.date).format("DD MMMM YYYY")}</p>
        </div>
      </MainPhoto>
      <MainArtDesc>
        <h6>{article.title[lang]}</h6>
        <p>{article.description[lang]}</p>
      </MainArtDesc>
    </MainArticle>
  );
};
