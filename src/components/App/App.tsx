import React, { useEffect } from 'react';
import './App.css';
import * as shapelib from '../../lib/shapelib';

function App() {
  useEffect(() => {
    shapelib.drawTestCurve('#line-example');
  });

  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <div style={{hei}}> */}
      <div id="line-example" style={{ width: '100%', height: '100%' }}></div>
    </div>
    // </div>
  );
}

export default App;
