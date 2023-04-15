import { useContext, useEffect, useState } from "react";
import { StyledContainer } from "../styles/app.styles";
import { NEWS } from "../../data";
import { NewsWrapper } from "../styles/news.styles";
import { PromoNews } from "./PromoNews";
import { OtherNews } from "./otherNews";
import { LangContext } from "../../context";
import CircularProgress from "@mui/material/CircularProgress";

export const News = () => {
  const [news, setNews] = useState(null);
  const { newsWrap } = useContext(LangContext);

  useEffect(() => {
    fetch("https://milkyscore.herokuapp.com/api/v1/news/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => setNews(data));
  }, []);

  if (!news)
    return (
      <StyledContainer>
        <NewsWrapper loading={!news && "center"} ref={newsWrap}>
          <CircularProgress />
        </NewsWrapper>
      </StyledContainer>
    );
  return (
    <div>
      <StyledContainer>
        <NewsWrapper ref={newsWrap}>
          <PromoNews article={news[0]} />
          <OtherNews articles={[...news.slice(1, 5)]} />
        </NewsWrapper>
      </StyledContainer>
    </div>
  );
};
