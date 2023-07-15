import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './pages/layout';
import Home from './pages/home';
import Quot from './pages/quotes';
import Calculate from './pages/calculate';

function App() {
  return (
    <div className="wraper">
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Calculate" element={<Calculate />} />
          <Route path="Quot" element={<Quot />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
