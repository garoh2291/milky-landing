import styled from "styled-components";

export const StyledFaq = styled.div`
  width: 100%;
  min-height: 300px;
  color: #fff;
  padding: 20px 0 100px;

  & > h3 {
    text-align: center;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 20px;
  }

  & > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
