import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { ShapeKind } from '../../lib/shapelib';
import { generateLinish } from '../../lib/shapelib/grammar';
import { VariableLine } from '../ShapeComponents/VariableLine';
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
  stroke: { color: '#ff1b5f50', width: 5 },
};

export const Hero = ({ title, subTitle, buttons = [], lineColor = shapeProps.stroke.color }: HeroProps) => {
  const pathString = generateLinish(2)

  shapeProps.stroke.color = lineColor;
  return (
    <div className={styles.heroOuterDiv}>
      <VariableLine
        {...shapeProps}
        pathString={pathString}
        style={{ position: 'absolute', maxWidth: '100%', marginTop: '-3em', zIndex: -1 }}
      />
      <div style={{ margin: '5em' }}>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h2">{subTitle}</Typography>
        <>{buttons}</>
      </div>
    </div>
  );
};
