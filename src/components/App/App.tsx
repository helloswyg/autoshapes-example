import React, { useEffect } from 'react';
import './App.css';
import * as shapelib from '../../lib/shapelib';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Section } from '../Section';

function App() {
  useEffect(() => {
    shapelib.drawTestCurve('#line-example');
  });

  return (
    <div className="App">
      <Header />
      <Section>
        <Hero />
      </Section>
      <Footer />
      {/* <div id="line-example" style={{ width: '100%', height: '100%' }}></div> */}
    </div>
    // </div>
  );
}

export default App;
