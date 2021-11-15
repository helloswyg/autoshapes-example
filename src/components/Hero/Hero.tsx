import { Typography } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { ReactNode } from 'react';
import { ShapeComponent, ShapeKind } from '../../lib/shapelib';
import styles from './Hero.module.css';

type HeroProps = {
  title: ReactNode;
  subTitle: ReactNode;
  buttons?: ReactNode;
  lineColor?: string;
};

const shapeProps = {
  kind: ShapeKind.LOOPY,
  complexity: 4,
  stroke: { color: '#ff1b5f', width: 3 },
};

export const Hero = ({ title, subTitle, buttons = [], lineColor = shapeProps.stroke.color }: HeroProps) => {
  shapeProps.stroke.color = lineColor;
  return (
    <div className={styles.heroOuterDiv}>
      <ShapeComponent {...shapeProps} style={{ position: 'absolute', maxWidth: '70%', marginTop: '-3em', zIndex:-1}} />
      <div style={{ margin: '5em' }}>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h2">{subTitle}</Typography>
        <>{buttons}</>
      </div>
    </div>
  );
};
