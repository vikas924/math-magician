import React from 'react';
import Calc from '../components/Calculator';

export default function Calculate() {
  return (
    <section className="calcpage">
      <div className="calcmain">
        <div className="calcdiv">
          <p className="calcpara">
            Lets do some math!
          </p>
        </div>
        <Calc />
      </div>
    </section>
  );
}
