import styled from "styled-components";

export const StyledMain = styled.div`
  width: 100%;
  color: #fff;
`;

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 320px;
  display: flex;

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    flex-direction: column-reverse;
  }
`;

export const StyledExplore = styled.div`
  width: 70%;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;

  & > h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: ${({ fs }) => fs || "57px;"};
    line-height: 69px;
  }

  & > p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 39px;
  }

  & > button {
    color: #c89d1c;
    background: none;
    border: 2px solid #c89d1c;
    border-radius: 42px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    padding: 15px 45px;
    margin-top: 20px;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.mobile2}) {
    width: 100%;
    align-items: center;
    text-align: center;

    & > h2 {
      font-size: ${({ fs }) => (fs === "am" ? "25px" : "30px;")};
      line-height: 40px;
    }
    & > p {
      font-size: 22px;
      line-height: 25px;
    }
    & > button {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 100%;
    height: auto;
  }
`;
