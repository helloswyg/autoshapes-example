import React from 'react';
import styles from './App.module.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Section } from '../Section';
import { AccentBlobsExample } from '../AccentBlobsExample';
import { TextBlock } from '../TextBlock';
import { SideBlob } from '../ShapeComponents/SideBlob';

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
        <SideBlob/>
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
