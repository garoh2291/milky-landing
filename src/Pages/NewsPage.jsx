import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { StyledContainer } from "../components/styles/app.styles";
import { NewsPageWrap } from "../components/NewsPage";
import CircularProgress from "@mui/material/CircularProgress";

export const NewsPage = () => {
  const [article, setArticle] = useState(null);
  const { pathname } = useLocation();
  const idx = pathname.split("/")[2];

  useEffect(() => {
    fetch(`https://milkyscore.herokuapp.com/api/v1/news/${idx}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => setArticle(data));
  }, [idx]);

  if (!article) {
    return (
      <StyledContainer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
        }}
      >
        <CircularProgress />
      </StyledContainer>
    );
  }

  return (
    <div>
      <StyledContainer>
        <NewsPageWrap article={article} />
      </StyledContainer>
    </div>
  );
};
