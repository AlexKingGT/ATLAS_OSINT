import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Collectors from './pages/Collectors';
import Search from './pages/Search';
import Analyzer from './pages/Analyzer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collectors" element={<Collectors />} />
            <Route path="/search" element={<Search />} />
            <Route path="/analyzer" element={<Analyzer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
