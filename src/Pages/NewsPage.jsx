import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NEWS } from "../data";
import { StyledContainer } from "../components/styles/app.styles";
import { NewsPageWrap } from "../components/NewsPage";

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
    return <div style={{ height: "500px", color: "#fff" }}>Loading</div>;
  }

  return (
    <div>
      <StyledContainer>
        <NewsPageWrap article={article} />
      </StyledContainer>
    </div>
  );
};
