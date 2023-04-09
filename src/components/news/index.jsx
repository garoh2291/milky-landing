import { useState } from "react";
import { StyledContainer } from "../styles/app.styles";
import { NEWS } from "../../data";
import { NewsWrapper } from "../styles/news.styles";
import { PromoNews } from "./PromoNews";
import { OtherNews } from "./otherNews";

export const News = () => {
  const [news] = useState(NEWS);
  return (
    <div>
      <StyledContainer>
        <NewsWrapper>
          <PromoNews article={news[0]} />
          <OtherNews articles={[...news.slice(1)]} />
        </NewsWrapper>
      </StyledContainer>
    </div>
  );
};
