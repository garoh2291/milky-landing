import styled from "styled-components";

export const StyledSingleNews = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  color: #fff;
  flex-wrap: wrap;
`;

export const MainArticle = styled.div`
  width: 70%;
  height: 100%;
  padding: 40px 0;

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    width: 100%;
    height: auto;
    padding: 40px 0 20px;
  }
`;

export const MainPhoto = styled.div`
  width: 100%;
  height: auto;
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

      @media (max-width: ${({ theme }) => theme.mobile2}) {
        font-size: 18px;
      }
    }
  }
`;

export const MainArtDesc = styled.div`
  width: 100%;
  padding: 30px 0;

  & > h6 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    @media (max-width: ${({ theme }) => theme.mobile2}) {
      font-size: 20px;
    }
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

    @media (max-width: ${({ theme }) => theme.mobile2}) {
      font-size: 16px;
      line-height: 18px;
    }
  }
`;

export const OtherArticleWrap = styled.div`
  width: 30%;
  height: 100%;
  padding: 32px 0px 40px 10px;

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
    padding: 0px;
    height: auto;
  }
`;

export const OtherWrap = styled.div`
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

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    height: auto;
    padding: 0px 0px 50px 0px;
  }
`;
