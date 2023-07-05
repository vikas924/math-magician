import React from 'react';
import PropTypes from 'prop-types';

function CalcUi() {
  return (
    <>
      <div className="display">
        <span className="display-result">0</span>
      </div>
      <div className="keypad">
        <div className="rows">
          <Calcbutton symbol="AC" buttonclass="key-silver" />
          <Calcbutton symbol="+/-" buttonclass="key-silver" />
          <Calcbutton symbol="%" buttonclass="key-silver" />
          <Calcbutton symbol="÷" buttonclass="key-orange" />
        </div>
        <div className="rows">
          <Calcbutton symbol="7" buttonclass="key-silver" />
          <Calcbutton symbol="8" buttonclass="key-silver" />
          <Calcbutton symbol="9" buttonclass="key-silver" />
          <Calcbutton symbol="+" buttonclass="key-orange" />
        </div>
        <div className="rows">
          <Calcbutton symbol="4" buttonclass="key-silver" />
          <Calcbutton symbol="5" buttonclass="key-silver" />
          <Calcbutton symbol="6" buttonclass="key-silver" />
          <Calcbutton symbol="-" buttonclass="key-orange" />
        </div>
        <div className="rows">
          <Calcbutton symbol="1" buttonclass="key-silver" />
          <Calcbutton symbol="2" buttonclass="key-silver" />
          <Calcbutton symbol="3" buttonclass="key-silver" />
          <Calcbutton symbol="+" buttonclass="key-orange" />
        </div>
        <div className="rowchange">
          <Calcbutton symbol="0" buttonclass="key-silver" />
          <Calcbutton symbol="." buttonclass="key-silver" />
          <Calcbutton symbol="=" buttonclass="key-orange" />
        </div>
      </div>
    </>
  );
}

function Calcbutton({ buttonclass, symbol }) {
  return (
    <>
      <button type="button" className={buttonclass}>{symbol}</button>
    </>
  );
}

Calcbutton.propTypes = {
  buttonclass: PropTypes.string.isRequired,
  symbol: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default CalcUi;
