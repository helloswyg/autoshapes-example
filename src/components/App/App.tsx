import React from 'react';
import styles from './App.module.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Section } from '../Base/Section';
import { AccentBlobsExample } from '../AccentBlobsExample';
import { TextBlock } from '../Base/TextBlock';
import { SideBlob } from '../ShapeComponents/SideBlob';
import { HowTo } from '../HowTo';

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
        <HowTo/>
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
