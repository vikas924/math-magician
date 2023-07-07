import React from 'react';
import Calc from './components/Calculator';
import './Appstyle.css';
import Quotes from './components/quote';

function App() {
  return (
    <div className="App">
      <Calc />
      <Quotes />
    </div>
  );
}

export default App;
