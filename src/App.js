import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HtmlPage from './Pages/HtmlPage';
import MainPage from './Pages/MainPage';
import MuiPage from './Pages/MuiPage';
import NestingPage from './Pages/NestingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/mui" exact element={<MuiPage />} />
        <Route path="/html" exact element={<HtmlPage />} />
        <Route path="/nesting" exact element={<NestingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
