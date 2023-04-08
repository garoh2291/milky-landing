import { Suspense } from "react";
import "./App.css";
import "../src/utils/i18next";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import { StyledApp } from "./components/styles/app.styles";
import { Header } from "./Layout/Header";
import { LangContextProvivder } from "./context/provider";
import { Main } from "./components/Main";
import { Predictions } from "./components/Predictions";
import { Promo } from "./components/demo";
import { FAQ } from "./components/faq";
import { Footer } from "./Layout/Footer";

const theme = {
  colors: {
    header: "rgb(var(--tmdbDarkBlue))",
    body: "#000",
    body1: "rgba(217, 217, 217, 0.27)",
    footer: "#003333",
  },
  mobile: "800px",
  mobile2: "600px",
};

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <LangContextProvivder>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <StyledApp>
            <Header />
            <Main />
            <Predictions />
            <Promo />
            <FAQ />
            <Footer />
          </StyledApp>
        </ThemeProvider>
      </LangContextProvivder>
    </Suspense>
  );
}

export default App;
