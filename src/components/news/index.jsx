import { useContext, useState } from "react";
import { StyledContainer } from "../styles/app.styles";
import { NEWS } from "../../data";
import { NewsWrapper } from "../styles/news.styles";
import { PromoNews } from "./PromoNews";
import { OtherNews } from "./otherNews";
import { LangContext } from "../../context";

export const News = () => {
  const [news] = useState(NEWS);
  const { newsWrap } = useContext(LangContext);
  return (
    <div>
      <StyledContainer>
        <NewsWrapper ref={newsWrap}>
          <PromoNews article={news[0]} />
          <OtherNews articles={[...news.slice(1)]} />
        </NewsWrapper>
      </StyledContainer>
    </div>
  );
};
