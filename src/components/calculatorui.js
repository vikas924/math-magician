import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function CalcUi() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    // Access the event object (e) here
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

function Calcbutton({ buttonclass, symbol, funct }) {
  return (
    <>
      <button type="button" onClick={funct} className={buttonclass}>{symbol}</button>
    </>
  );
}

Calcbutton.propTypes = {
  buttonclass: PropTypes.string.isRequired,
  symbol: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  funct: PropTypes.func.isRequired,
};

export default CalcUi;
