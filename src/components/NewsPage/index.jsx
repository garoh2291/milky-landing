import { useRef, useState } from "react";
import { StyledSingleNews } from "../styles/single.styles";
import { MainNews } from "./MainNews";
import { OtherNews } from "./OtherNews";
import { NEWS } from "../../data";

export const NewsPageWrap = ({ article }) => {
  const [articles, setArticles] = useState([
    article,
    ...NEWS.slice(0, NEWS.indexOf(article)),
    ...NEWS.slice(NEWS.indexOf(article) + 1),
  ]);

  const mainNews = useRef();

  const changeArticle = (article) => {
    setArticles((prev) => {
      return [
        article,
        ...prev.slice(0, prev.indexOf(article)),
        ...prev.slice(prev.indexOf(article) + 1),
      ];
    });

    if (mainNews.current) {
      mainNews.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledSingleNews>
      <MainNews article={articles[0]} mainNews={mainNews} />
      <OtherNews news={articles.slice(1)} handleClick={changeArticle} />
    </StyledSingleNews>
  );
};
