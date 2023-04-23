import styled from "styled-components";

export const StyledPrivacy = styled.div`
  width: 100%;
  color: #fff;
`;

export const PrivacyWrapper = styled.div`
  width: 100%;
  min-height: 280px;
  padding: 40px 0;

  & > h6 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 15px;
  }

  & > p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    margin-bottom: 10px;
  }

  & > ol {
    margin-left: 30px;
    margin-bottom: 10px;
  }
`;

export const StyledHeadtext = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 20px;
`;
