import React from 'react';
import styles from './App.module.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Section } from '../Section';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Section>
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
