import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  background: rgba(10, 10, 63, 0.2);
`;

export const FooterWrapper = styled.div`
  width: 100%;
  min-height: 280px;
`;

export const LogoWrap = styled.div`
  width: 100%;
  min-height: 150px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & > div:first-child {
    gap: 20px;
    @media (max-width: ${({ theme }) => theme.mobile2}) {
      flex-direction: column;
    }
  }

  & > div:nth-child(2) {
    gap: 30px;

    @media (max-width: ${({ theme }) => theme.mobile2}) {
      flex-direction: column;
      gap: 20px;

      & > img:first-child {
        order: 1;
      }

      & > img:last-child {
        order: 2;
      }
    }
  }

  & > :last-child {
    @media (max-width: ${({ theme }) => theme.mobile2}) {
      padding-bottom: 20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    flex-direction: column;
    gap: 25px;
    padding-top: 20px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  margin: 30px 0 40px;

  & > p {
    color: rgba(255, 255, 255, 0.8);
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-transform: capitalize;

    @media (max-width: ${({ theme }) => theme.mobile2}) {
      text-align: center;
    }
  }
`;

export const PrivacyLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.8);

  & > a {
    text-decoration: none;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
    color: #ffffff;

    @media (max-width: ${({ theme }) => theme.mobile2}) {
      width: 50%;
      text-align: right;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    padding-bottom: 20px;
  }
`;
