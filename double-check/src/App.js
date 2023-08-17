import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import Root from "./pages/Root";
import Main from "./pages/MainPage";
import ReportList from "./pages/ReportListPage";
import Fakenews from "./pages/Fakenews";
import Trends from "./pages/Trends";
import TruthCheck from "./pages/TruthCheckPage";
import Nav from "./pages/NavPage";
import FakeDetail from "./pages/FakeDetail";
import Search from "./pages/SearchPage";
import Check from "./pages/CheckPage";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <>
        <Reset />
        <Routes>
          <Route exact path="/" element={<Root />}>
            <Route path="/main" element={<Main />} />
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/report" element={<ReportList />} />
            <Route path="/check" element={<Check />} />
            <Route path="/truthcheck" element={<TruthCheck />} />
            <Route path="fakenews" element={<Fakenews />} />
            <Route path="trend" element={<Trends />} />
            <Route path="nav" element={<Nav />} />
            <Route path="search" element={<Search />} />
            <Route path="search/:keyword" element={<Search />} />
            <Route path="/truthcheck/:id" element={<TruthCheck />} />
            <Route exact path="fakenews/:id" element={<FakeDetail />} />
            <Route exact path="/trend/:id" element={<Trends />} />
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
