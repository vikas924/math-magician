/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

function CalcUi() {
  return (
    <>
      <div className="display">
        <span className="display-result">0</span>
      </div>
      <div className="keypad">
        <div className="rows">
          <Calcbutton symbol="AC" class="key-silver" />
          <Calcbutton symbol="+/-" class="key-silver" />
          <Calcbutton symbol="%" class="key-silver" />
          <Calcbutton symbol="÷" class="key-orange" />
        </div>
        <div className="rows">
          <Calcbutton symbol="7" class="key-silver" />
          <Calcbutton symbol="8" class="key-silver" />
          <Calcbutton symbol="9" class="key-silver" />
          <Calcbutton symbol="+" class="key-orange" />
        </div>
        <div className="rows">
          <Calcbutton symbol="4" class="key-silver" />
          <Calcbutton symbol="5" class="key-silver" />
          <Calcbutton symbol="6" class="key-silver" />
          <Calcbutton symbol="-" class="key-orange" />
        </div>
        <div className="rows">
          <Calcbutton symbol="1" class="key-silver" />
          <Calcbutton symbol="2" class="key-silver" />
          <Calcbutton symbol="3" class="key-silver" />
          <Calcbutton symbol="+" class="key-orange" />
        </div>
        <div className="rowchange">
          <Calcbutton symbol="0" class="key-silver" />
          <Calcbutton symbol="." class="key-silver" />
          <Calcbutton symbol="=" class="key-orange" />
        </div>
      </div>
    </>
  );
}

function Calcbutton(props) {
  const buttonclass = props.class;
  return (
    <>
      <button type="button" className={buttonclass}>{props.symbol}</button>
    </>
  );
}

export default CalcUi;
