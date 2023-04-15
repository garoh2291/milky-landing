import { useEffect, useRef, useState } from "react";
import { StyledSingleNews } from "../styles/single.styles";
import { MainNews } from "./MainNews";
import { OtherNews } from "./OtherNews";

export const NewsPageWrap = ({ article }) => {
  const [articles, setArticles] = useState(null);

  const mainNews = useRef();

  useEffect(() => {
    fetch(`https://milkyscore.herokuapp.com/api/v1/news`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        if (article) {
          setArticles(data.filter((item) => item._id !== article._id));
        }
      });
  }, [article]);

  const changeArticle = () => {
    if (mainNews.current) {
      mainNews.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledSingleNews>
      <MainNews article={article} mainNews={mainNews} />
      <OtherNews news={articles} handleClick={changeArticle} />
    </StyledSingleNews>
  );
};
