import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 84px;
  background-color: rgba(255, 255, 255, 0.04);
  color: #fff;
`;

export const StyledBar = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.div`
  width: 151px;
  height: 50px;
  cursor: pointer;

  & > img {
    width: 100%;
    height: auto;
  }
`;

export const StyledMenu = styled.div`
  min-width: 360px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const StyledLog = styled.a`
  text-decoration: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;

export const StyledJoin = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 24px;
  background: linear-gradient(180deg, #ffd200 0%, #f7971e 100%);
  border-radius: 42px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  border: none;
  color: #ffffff;
`;
