import { MainArtDesc, MainArticle, MainPhoto } from "../styles/single.styles";
import moment from "moment";
import { useContext } from "react";
import { LangContext } from "../../context";

export const MainNews = ({ article }) => {
  const { lang } = useContext(LangContext);
  return (
    <MainArticle>
      <MainPhoto photo={article.image}>
        <div>
          <p>{moment(article.createdAt).format("DD MMMM YYYY")}</p>
        </div>
      </MainPhoto>
      <MainArtDesc>
        <h6>{article.title[lang]}</h6>
        <p>{article.description[lang]}</p>
      </MainArtDesc>
    </MainArticle>
  );
};
