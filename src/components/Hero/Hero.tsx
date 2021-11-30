import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';
import { Blob } from '../../lib/shapelib';
import { simpleLinearGradient } from '../../lib/shapelib/utils';
import { theme } from '../../theme';
import styles from './Hero.module.css';

const secondaryColor = theme.palette.secondary.light.toString();
const primaryColor = theme.palette.primary.light.toString();
const fill = simpleLinearGradient([secondaryColor, primaryColor], -30);

type HeroProps = {
  title: ReactNode;
  subTitle: ReactNode;
  buttons?: ReactNode;
  lineColor?: string;
};

const shapeProps: React.ComponentProps<typeof Blob> = {
  complexity: 14,
  stroke: 'none',
  fill: fill,
  variability: 40,
  smoothness: 0.5,
};

export const Hero = ({ title, subTitle, buttons = [] }: HeroProps) => {
  return (
    <Container className={styles.heroOuterDiv}>
    {/* <div > */}
      <Box className={styles.blobContainer}>
        <Blob  {...shapeProps} />
      </Box>
      <Box sx={{ margin: {xs:'3rem 0 7rem', md:'10rem 0'} }}>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h2">{subTitle}</Typography>
        <>{buttons}</>
      </Box>
    {/* </div> */}
    </Container>
  );
};
