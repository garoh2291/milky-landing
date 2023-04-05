import styled from "styled-components";

export const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.body};
  color: "#FFFFFF";
  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    min-height: 100vh;
  } */
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0 64px;
  border: 1px solid white;
  height: auto;
  margin: 0 auto;
`;
