import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HtmlPage from './Pages/HtmlPage';
import MainPage from './Pages/MainPage';
import MuiPage from './Pages/MuiPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/mui" exact element={<MuiPage />} />
        <Route path="/html" exact element={<HtmlPage />} />
      </Routes>
    </Router>
  );
}

export default App;
