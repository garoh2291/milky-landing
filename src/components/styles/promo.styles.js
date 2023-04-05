import styled from "@emotion/styled";

export const PromoWrapper = styled.div`
  width: 100%;
  /* min-height: 474px; */
  color: #fff;
  background: rgba(255, 255, 255, 0.07);
`;

export const StyledPromo = styled.div`
  width: 100%;
  min-height: 474px;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
`;

export const PromoText = styled.div`
  width: 45%;
  padding-top: 30px;

  & > h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: 51px;
    text-transform: uppercase;

    & > span {
      color: #c09216;
    }
  }

  & > button {
    background: linear-gradient(180deg, #ffd200 0%, #f7971e 100%);
    border-radius: 42px;
    border: none;
    color: #fff;
    padding: 8px 24px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    margin-top: 60px;
  }
`;

export const PromoBanner = styled.div`
  width: 55%;
  padding-top: 30px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 46px;
    line-height: 56px;
    color: #ffffff;
  }

  & > div {
    width: 608px;
    height: 364px;
    background: linear-gradient(
      109.97deg,
      #c09216 36.67%,
      rgba(255, 186, 0, 0) 100%
    );
    border-radius: 26px;

    & > div:first-child {
      height: 72px;
      background: #0a0a3f;
      border-radius: 26px 26px 0px 0px;
      display: flex;
      align-items: center;
      padding: 0px 30px;
      justify-content: space-between;

      & > p {
        font-family: "Jost";
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 32px;
      }
    }
  }
`;
