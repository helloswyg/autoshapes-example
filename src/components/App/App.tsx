import React from 'react';
import styles from './App.module.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Section } from '../Base/Section';
import { SideBlob } from '../ShapeComponents/SideBlob';
import { HowTo } from '../HowTo';
import { VariationsGallery } from '../VariationsGallery';
import { TextBoxExample } from '../TextBoxExample';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Section>
        <Hero
          title={
            <>
              ShapeLib
            </>
          }
          subTitle={<>Beautiful, procedurally generated <br />shapes for the web</>}
        />
      </Section>
      <Section>
        <HowTo />
      </Section>
      <Section>
        <SideBlob />
        <VariationsGallery />
      </Section>
      {/* <Section >
        <AccentBlobsExample />
      </Section> */}
      <Section>
        <TextBoxExample />
      </Section>
      <Footer />
    </div>
    // </div>
  );
}

export default App;
