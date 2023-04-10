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
  position: relative;
`;

export const StyledLogo = styled.div`
  width: 151px;
  height: 50px;
  cursor: pointer;

  & > a {
    text-decoration: none;
  }

  & > a > img {
    width: 100%;
    height: auto;
  }
`;

export const StyledMobileWrap = styled.div`
  height: 100%;
  display: none;

  & > button {
    background-color: transparent;
    border: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledMenu = styled.div`
  min-width: 360px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    width: 100vw;
    display: ${({ opened }) => opened || "none"};
    height: 100vh;
    z-index: 999;
    position: fixed;
    top: 84px;
    left: 0;
    background-color: #000;
    flex-direction: column;
    padding: 30px 10px;
    gap: 20px;
  }
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
  cursor: pointer;
`;

export const MobileNav = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    & > span {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      cursor: pointer;
    }
  }
`;
