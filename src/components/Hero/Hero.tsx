import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { ShapeComponent, ShapeKind } from '../../lib/shapelib';
import styles from './Hero.module.css';

type HeroProps = {
  title: ReactNode;
  subTitle: ReactNode;
  buttons?: ReactNode;
  lineColor?: string;
};

export const Hero = ({
  title,
  subTitle,
  buttons = [],
  lineColor = '#ff1b5f',
}: HeroProps) => {
  return (
    <div className={ styles.heroOuterDiv }>
      <ShapeComponent
        kind={ ShapeKind.LOOPY }
        complexity={ 4 }
        stroke={{ color: 'currentColor', width: 3 }}
        style={{ maxWidth: '70%', marginTop: '-3em', fontSize: '3px', color: lineColor }}
        debug />

      <div style={{ margin: '5em' }}>
        <Typography variant="h1">{ title }</Typography>
        <Typography variant="h2">{ subTitle }</Typography>
        { buttons }
      </div>

    </div>
  );
};
