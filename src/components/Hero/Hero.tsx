import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { ShapeComponent, ShapeKind } from '../../lib/shapelib';
import { getShapeTheme } from '../../shapeTheme';

type HeroProps = {
  title: ReactNode;
  subTitle: ReactNode;
  buttons?: ReactNode;
};

const shapeProps = {
  kind: ShapeKind.LOOPY,
  complexity: 4,
};

export const Hero = ({ title, subTitle, buttons = [] }: HeroProps) => {
  return (
    <div id="div-outer" style={{ margin: '5em' }}>
      <ShapeComponent {...shapeProps} />
      <div style={{ margin: '5em' }}>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h2">{subTitle}</Typography>
        <>{buttons}</>
      </div>
    </div>
  );
};
