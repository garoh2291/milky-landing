import styled from "styled-components";

export const NewsWrapper = styled.div`
  width: 100%;
  height: 780px;
  padding: 60px 0;
  display: flex;
  align-items: center;
  color: #fff;

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    flex-direction: column;
    height: auto;
  }
`;

export const PromoWrapper = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    width: 100%;
    height: auto;
  }
`;

export const PromoPhoto = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 12px;
  background: ${({ photo }) => `url(${photo})` || "none"};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & > div {
    background: rgba(0, 0, 0, 0.79);
    border-radius: 0px 0px 12px 12px;
    height: 48px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & > p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 27px;
    }
  }
`;

export const PromoNewsDesc = styled.div`
  width: 100%;
  padding: 30px 0;

  & > h6 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  & > p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    text-align: left;
    color: rgba(255, 255, 255, 0.82);
    margin-top: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const ReadMore = styled.div`
  height: 40px;

  & > a {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    text-decoration: none;
  }
`;

export const OtherArticles = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 20px;

  & > h6 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    line-height: 46px;
    margin-block-start: 0 !important;
    margin-bottom: 15px;
  }

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    width: 100%;
    height: auto;
  }
`;

export const ArticleWrap = styled.div`
  width: 100%;
  height: calc(100% - 46px);
  overflow-y: auto;

  & > div {
    width: 100%;
    height: 137px;
    margin-bottom: 15px;
    display: flex;
    gap: 10px;
  }

  & > div:last-child {
    margin-bottom: 0;
  }
`;

export const ArticleImg = styled.div`
  width: 200px;
  height: 100%;
  background: ${({ bg }) => `url(${bg})` || "none"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & > div {
    height: 30px;
    background: rgba(0, 0, 0, 0.79);
    border-radius: 0px 0px 12px 12px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & > p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;

      @media (max-width: ${({ theme }) => theme.mobile2}) {
        font-size: 18px;
      }
    }
  }
`;

export const ArticleContent = styled.div`
  width: calc(100% - 210px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > h6 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media (max-width: ${({ theme }) => theme.mobile2}) {
      font-size: 20px;
    }
  }

  & > p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 15px;

    @media (max-width: ${({ theme }) => theme.mobile2}) {
      font-size: 16px;
      line-height: 18px;
    }
  }

  & > a {
    text-decoration: none;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
  }

  & > span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    cursor: pointer;
  }
`;
