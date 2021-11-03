import { Typography } from '@mui/material';
import { ReactNode } from 'react';

type HeroProps = {
  title: ReactNode;
  subTitle: ReactNode;
  buttons?: ReactNode;
};

export const Hero = ({ title, subTitle, buttons = [] }: HeroProps) => (
  <div>
    <Typography variant="h1">{title}</Typography>

    <Typography variant="h2">{subTitle}</Typography>
    <>{buttons}</>
  </div>
);
