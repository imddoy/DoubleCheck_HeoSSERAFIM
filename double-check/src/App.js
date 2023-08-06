import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import Main from "./pages/MainPage";
import ReportList from "./pages/ReportListPage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Reset />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/report" element={<ReportList />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
