import React from 'react';
import PropTypes from 'prop-types';

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

export default Calcbutton;
