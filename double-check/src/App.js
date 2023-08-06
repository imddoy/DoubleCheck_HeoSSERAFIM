import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Main from './pages/MainPage';
import ReportList from './pages/ReportListPage';
import Fakenews from './pages/Fakenews';
import Trends from './pages/Trends';

function App() {
    return (
        <BrowserRouter>
            <>
                <Reset />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/report" element={<ReportList />} />
                    <Route path="/fakenews" element={<Fakenews />} />
                    <Route path="/trend" element={<Trends />} />
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default App;
