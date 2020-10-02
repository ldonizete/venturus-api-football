import React from 'react';
import './index.css';

function Pickedplayer() {
  return (
    <div className="painel">
      <div className="rowPicked">
        <div className="colPicked">
          <h2>Most picked player</h2>
        </div>
        <div className="meioCampo">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div className="colPicked">
          <h2>Less picked player</h2>
        </div>
      </div>
    </div>
  );
}

export default Pickedplayer;