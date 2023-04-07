import styled from "styled-components";

export const StyledPredictions = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.0558) 0%,
    rgba(255, 255, 255, 0.009) 100%
  );
  width: 100%;
  color: #fff;
`;

export const PredictWrapper = styled.div`
  width: 100%;
  min-height: 300px;
`;

export const StyledTypes = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

export const StyledBoard = styled.div`
  width: 100%;
  min-height: 550px;
  margin-top: 20px;
  /*border: 1px solid;*/
  display: grid;
  grid-template-columns: repeat(auto-fill, 416px);
  grid-gap: 10px;
`;

export const StandartWrap = styled.div`
  width: 416px;
  height: 261px;
  background: rgba(255, 255, 255, 0.09);
  border-radius: 18px;
`;

export const MatchWrap = styled.div`
  width: 416px;
  grid-row-end: span 2;
  height: 532px;

  background: rgba(255, 255, 255, 0.09);
  border-radius: 18px;
`;

export const GameHead = styled.div`
  width: 100%;
  height: 58px;
  background: #0a0a3f;
  border-radius: 18px 18px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;

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
  }
`;

export const GameBody = styled.div`
  height: calc(100% - 58px);

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div > div {
      height: 30px;
      width: 30px;

      & > img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
