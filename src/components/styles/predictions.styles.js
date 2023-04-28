import styled from "styled-components";

export const StyledPredictions = styled.div`
  width: 100%;
  color: #fff;
`;

export const PredictWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  padding-bottom: 60px;

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    padding-bottom: 20px;
  }
`;

export const StyledTypeWrap = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.0558) 0%,
    rgba(255, 255, 255, 0.009) 100%
  );
`;

export const StyledTypes = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-overflow-scrolling: touch;

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    padding-top: 10px;
    gap: 5px;
    padding-bottom: 10px;
    overflow-x: auto;
    height: unset;
    -ms-overflow-style: none;
    scrollbar-width: none;
    flex-wrap: wrap;
    /* justify-content: flex-start; */

    &::-webkit-scrollbar {
      display: none;
    }

    /* & > div:last-child {
      margin-right: 10px;
    } */
  }
`;

export const StyledSport = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  cursor: pointer;

  & > p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-transform: capitalize;
    z-index: 5;
  }

  & > img {
    z-index: 5;
  }

  &::after {
    content: "";
    width: ${({ active }) => active || "0%"};
    height: 6px;
    background: #c89d1c;
    bottom: -14px;
    left: 0;
    position: absolute;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    box-shadow: 15px -30px 25px 5px #c89d1c;
  }

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    background-color: ${({ active }) => (active ? "#c89d1c" : "")};
    padding: 10px 5px;
    border-radius: 8px;
    width: 30%;
    & > p {
      white-space: nowrap;
      font-size: ${({ sz }) => sz || "14px"};
      line-height: 14px;
    }

    & > img {
      width: 16px;
      height: 16px;
    }

    &::after {
      display: none;
    }
  }
`;

export const StyledBoard = styled.div`
  width: 100%;
  min-height: 550px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 410px);
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const MoreBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > button {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 42px;
    width: 210px;
    height: 44px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    border: none;
    margin-top: 30px;
    text-align: center;
    cursor: pointer;

    & > img {
      margin-left: 10px;
    }
  }
`;

export const StandartWrap = styled.div`
  width: 416px;
  height: 261px;
  border-radius: 18px;
  position: relative;
  /* background: rgba(255, 255, 255, 0.09); */
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center left 105px;

  z-index: 1;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center left 105px;
    border-radius: 18px;
    background-image: url(${({ bg }) => bg});
    position: absolute;
    transform: rotateY(180deg);

    top: 0;
    left: 0;
    z-index: -1;

    @media (max-width: ${({ theme }) => theme.mobile2}) {
      background-position: center left -25%;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    width: 100%;
    height: unset;
    min-height: 261px;
    background-position: center left -25%;
  }
`;

export const MatchWrap = styled.div`
  width: 416px;
  grid-row-end: span 2;
  height: 542px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(10, 10, 63, 0.9);
  border-radius: 18px;
  padding: 5px 5px 20px 5px;

  & > h6 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    width: 100%;
    height: auto;
  }
`;

export const MatchWrapGame = styled.div`
  /* margin-top: 20px; */
  width: 100%;
  min-height: 261px;
  background: linear-gradient(
    179.83deg,
    #b88e1d 38.65%,
    rgba(184, 142, 29, 0) 99.66%
  );
  border-radius: 18px;
  position: relative;
`;

export const MatchDesc = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-top: 30px;
  display: -webkit-box;
  -webkit-line-clamp: 11;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    -webkit-line-clamp: unset;
  }
`;

export const GameHead = styled.div`
  width: 100%;
  height: 58px;
  background: #0a0a3f;
  border-radius: 18px 18px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 10px;

    & > p {
      font-family: "Jost";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 26px;
      text-transform: capitalize;
    }
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    gap: 10px;

    & > div:last-child > p {
      font-family: "Jost";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
    }

    & > div:last-child > p:first-child {
      font-size: 10px;
    }
  }
`;

export const GameBody = styled.div`
  height: calc(100% - 138px);
  padding: ${({ letter }) => (letter ? "30px 10px 0px" : "30px 10px 20px")};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;

  & > div:not(:nth-child(2)) {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    & > p {
      font-family: "Jost";
      font-style: normal;
      font-weight: 500;
      font-size: ${({ letter }) => letter || "18px"};
      line-height: 20px;
      text-align: center;
      width: 80%;
    }
  }

  & > div:nth-child(2) {
    margin-top: 35px;
    font-family: "Jost";
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 46px;

    & > div {
      width: 30px;
      height: 3px;
      background-color: #ffffff;
    }
  }
`;

export const GameOfDay = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  color: #0a0a3f;
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  text-align: center;
`;

export const GameDetails = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 20px 10px 0px;
`;

export const Detail = styled.div`
  text-align: center;
  & > p:first-child {
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
  }
  & > p:last-child {
    font-family: "Jost";
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 12px;
  }
`;

export const Event = styled.div`
  flex: 1;
  background: #32a516;
  border: 1px solid #ffffff;
  border-radius: 42px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ fs }) => fs || "16px"};
  padding: ${({ fs }) => (fs ? "0px 10px" : "")};
  line-height: ${({ fs }) => (fs ? "15px" : "23px")};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const EmptyEvent = styled.div`
  width: 100%;
  height: 50px;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
`;
