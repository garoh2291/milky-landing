import { Routes, Route } from "react-router-dom";
import { MainPage } from "../Pages/Main";
import { NewsPage } from "../Pages/NewsPage";
import { PrivacyPolicy } from "../Pages/PrivacyPolicy";
import { CommingSoon } from "../Pages/CommingSoon";
import { ErrorPage } from "../Pages/404";

export const RouteComponents = () => {
  return (
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:id" element={<NewsPage />} />
      <Route path="/auth" element={<CommingSoon />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
