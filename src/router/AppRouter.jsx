import { BrowserRouter, Routes, Route } from "react-router-dom";
import PasscodePage from "../pages/PasscodePage";
import MainPage from "../pages/MainPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<PasscodePage />} /> */}
                <Route path="/" element={<MainPage />} />

      </Routes>
    </BrowserRouter>
  );
}