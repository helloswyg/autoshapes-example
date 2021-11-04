import React, { useEffect } from 'react';
import styles from './App.module.css';
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
    <div className={styles.app}>
      <Header />
      <Section>
        <div id="line-example" style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -1 }}></div>
        <Hero
          title={<>Instant Unique Brand</>}
          subTitle={
            <>
              Beautiful procedurally generated shapes <br /> for your websites
            </>
          }
        />
      </Section>
      <Footer />
    </div>
    // </div>
  );
}

export default App;
