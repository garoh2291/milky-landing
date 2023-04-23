import styled from "styled-components";

export const StyledOtherWrap = styled.div`
  width: 100%;
  min-height: 400px;
  color: #fff;
`;

export const StyledSooon = styled.h6`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 55px;
  text-align: center;
  margin-top: 20px;
  color: #fff;
`;

export const StyledBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -25px;
  margin-bottom: 20px;
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
    & > a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
