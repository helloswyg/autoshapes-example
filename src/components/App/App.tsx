import React from 'react';
import styles from './App.module.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Section } from '../Section';
import { AccentBlobsExample } from '../AccentBlobsExample';
import { TextBlock } from '../TextBlock';
import { setShapeTheme } from '../../lib/shapelib';

// TODO: To be implemented:
setShapeTheme({
  color: 'rgba(255, 0, 0, .75)',
  thickness: 4,
});

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
      <Section >
        <AccentBlobsExample />
      </Section>
      <Section >
        <TextBlock title="Text Block">
          This is a text block body text.
        </TextBlock>
      </Section>
      <Footer />
    </div>
    // </div>
  );
}

export default App;
