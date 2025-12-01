import "./i18n";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { HomeScreen } from "./pages/HomeScreen";
import { PrivacyPolitice } from "./pages/PrivacyPolicy";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/politicas-privacidad" element={<PrivacyPolitice />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
