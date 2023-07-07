import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Calcbutton from './calcbutton';

function CalcUi() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const value = e.target.innerHTML;
    setState(calculate(state, value));
  };

  return (
    <>
      <div className="display">
        <span className="display-result">{state.next || state.operation || state.total || 0}</span>
      </div>
      <div className="keypad">
        <div className="rows">
          <Calcbutton symbol="AC" funct={handleClick} buttonclass="key-silver" />
          <Calcbutton symbol="+/-" funct={handleClick} buttonclass="key-silver" />
          <Calcbutton symbol="%" funct={handleClick} buttonclass="key-silver" />
          <Calcbutton symbol="÷" funct={handleClick} buttonclass="key-orange" />
        </div>
        <div className="rows">
          <Calcbutton symbol="7" funct={handleClick} buttonclass="key-silver" />
          <Calcbutton symbol="8" funct={handleClick} buttonclass="key-silver" />
          <Calcbutton symbol="9" funct={handleClick} buttonclass="key-silver" />
          <Calcbutton symbol="x" funct={handleClick} buttonclass="key-orange" />
        </div>
        <div className="rows">
          <Calcbutton symbol="4" funct={handleClick} buttonclass="key-silver" />
          <Calcbutton symbol="5" funct={handleClick} buttonclass="key-silver" />
          <Calcbutton symbol="6" funct={handleClick} buttonclass="key-silver" />
          <Calcbutton symbol="-" funct={handleClick} buttonclass="key-orange" />
        </div>
        <div className="rows">
          <Calcbutton symbol="1" funct={handleClick} buttonclass="key-silver" />
          <Calcbutton symbol="2" funct={handleClick} buttonclass="key-silver" />
          <Calcbutton symbol="3" funct={handleClick} buttonclass="key-silver" />
          <Calcbutton symbol="+" funct={handleClick} buttonclass="key-orange" />
        </div>
        <div className="rowchange">
          <Calcbutton symbol="0" funct={handleClick} buttonclass="key-silver" />
          <Calcbutton symbol="." funct={handleClick} buttonclass="key-silver" />
          <Calcbutton symbol="=" funct={handleClick} buttonclass="key-orange" />
        </div>
      </div>
    </>
  );
}

export default CalcUi;
