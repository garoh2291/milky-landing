import { Suspense } from "react";
import "./App.css";
import "../src/utils/i18next";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import { StyledApp } from "./components/styles/app.styles";
import { Header } from "./Layout/Header";
import { LangContextProvivder } from "./context/provider";
import { Footer } from "./Layout/Footer";
import { BrowserRouter } from "react-router-dom";
import { RouteComponents } from "./routes";

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
    <BrowserRouter>
      <Suspense fallback={<h1>Loading</h1>}>
        <LangContextProvivder>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <StyledApp>
              <Header />
              <RouteComponents />
              <Footer />
            </StyledApp>
          </ThemeProvider>
        </LangContextProvivder>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
