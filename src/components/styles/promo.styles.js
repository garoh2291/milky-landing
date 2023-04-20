import styled from "styled-components";

export const PromoWrapper = styled.div`
  width: 100%;
  color: #fff;
  background: rgba(255, 255, 255, 0.07);
`;

export const StyledPromo = styled.div`
  width: 100%;
  min-height: 474px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    flex-direction: column;
    padding-bottom: 40px;
  }
`;

export const PromoText = styled.div`
  width: 45%;
  padding-top: 45px;
  & > h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: ${({ fs }) => (fs === "am" ? "30px" : "42px")};
    line-height: 51px;
    text-transform: uppercase;
    & > span {
      color: #c09216;
    }

    @media (max-width: ${({ theme }) => theme.mobile2}) {
      font-size: 25px;
      line-height: 30px;
      text-align: center;
    }
  }
  & > button {
    background: linear-gradient(180deg, #ffd200 0%, #f7971e 100%);
    border-radius: 42px;
    border: none;
    color: #fff;
    text-transform: capitalize;
    padding: 8px 24px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    margin-top: 60px;

    @media (max-width: ${({ theme }) => theme.mobile2}) {
      margin-top: 20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    width: 100%;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
`;

export const PromoBanner = styled.div`
  width: 55%;
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

    @media (max-width: ${({ theme }) => theme.mobile2}) {
      display: none;
    }
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
    & > div:first-of-type {
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

        @media (max-width: ${({ theme }) => theme.mobile2}) {
          font-size: 18px;
          line-height: 20px;
        }
      }

      & > div {
        display: flex;
        align-items: center;
        gap: 5px;

        & > div > p {
          font-family: "Jost";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;

          @media (max-width: ${({ theme }) => theme.mobile2}) {
            font-size: 15px;
            line-height: 18px;
          }
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.mobile2}) {
      width: 100%;
      min-height: 364px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    width: 100%;
    padding-left: 0px;
  }
`;

export const PromoCheck = styled.div`
  padding: 0 30px;
  height: calc(100% - 72px);
  width: 100%;

  & > div:last-child {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
  }
  & > div:last-child > button {
    background: #0a0a3f;
    border-radius: 15px;
    width: 128px;
    height: 42px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    border: none;
    color: #fff;
    text-align: center;
  }
`;

export const CheckLine = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  margin-top: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: 0;
    background: linear-gradient(#c09216 36.67%, rgba(255, 186, 0, 0) 100%);
  }
`;

export const EventDetail = styled.div`
  width: ${({ type }) => type || "15%"};
  padding: 5px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${({ cl }) => cl || "#fff"};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${({ cl }) => (cl ? "600" : "500")};
  font-size: ${({ cl }) => (cl ? "16px" : "14px")};
  line-height: ${({ cl }) => (cl ? "20px" : "17px")};

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    font-size: 10px;
    line-height: 16px;
  }
`;
