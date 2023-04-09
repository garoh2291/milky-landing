import { Routes, Route } from "react-router-dom";
import { MainPage } from "../Pages/Main";
import { NewsPage } from "../Pages/NewsPage";

export const RouteComponents = () => {
  return (
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="/news/:id" element={<NewsPage />} />
    </Routes>
  );
};
