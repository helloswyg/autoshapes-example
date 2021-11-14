import React from 'react';
import styles from './App.module.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Section } from '../Section';
import { AccentBlobsExample } from '../AccentBlobsExample';

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
      <Section>
        <AccentBlobsExample/>
      </Section>
      <Footer />
    </div>
    // </div>
  );
}

export default App;
