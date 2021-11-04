import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Shape } from '../../lib/shapelib/ShapeComponent';
import { getShapeTheme } from '../../shapeTheme';

type HeroProps = {
  title: ReactNode;
  subTitle: ReactNode;
  buttons?: ReactNode;
};

export const Hero = ({ title, subTitle, buttons = [] }: HeroProps) => {
  const shapeTheme = getShapeTheme();
  return (
    <div id="div-outer" style={{ margin: '5em' }}>
      <Shape {...shapeTheme} />
      <div style={{ margin: '5em' }}>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h2">{subTitle}</Typography>
        <>{buttons}</>
      </div>
    </div>
  );
};
