import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NEWS } from "../data";
import moment from "moment";
import {
  PromoNewsDesc,
  PromoPhoto,
  PromoWrapper,
} from "../components/styles/news.styles";
import { LangContext } from "../context";

export const NewsPage = () => {
  const [article, setArticle] = useState(null);
  const { lang } = useContext(LangContext);
  const { pathname } = useLocation();
  const idx = pathname.split("/")[2];

  useEffect(() => {
    const data = NEWS.find((article) => article.id === idx);
    setArticle(data);
  }, [idx]);

  console.log(article);
  if (!article) {
    return <div style={{ height: "500px", color: "#fff" }}>Loading</div>;
  }

  return (
    <div style={{ height: "700px" }}>
      <PromoWrapper>
        <PromoPhoto photo={article.url}>
          <div>
            <p>{moment(article.date).format("DD MMMM YYYY")}</p>
          </div>
        </PromoPhoto>
        <PromoNewsDesc>
          <h6>{article.title[lang]}</h6>
          <p>{article.description[lang]}</p>
        </PromoNewsDesc>
      </PromoWrapper>
    </div>
  );
};
