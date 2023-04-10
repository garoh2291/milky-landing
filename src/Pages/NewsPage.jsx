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
    const data = NEWS.find((article) => article.id === idx);
    setArticle(data);
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
