import { Grid, Paper, Typography } from '@mui/material';
import { ReactNode } from 'react';

export type GalleryProps = {
  title: string;
  items: ReactNode[];
};

const GalleryItem: React.FC<{}> = (props) => {
  return (
    <Paper
      sx={{
        minWidth: '5rem',
        minHeight: '5rem',
        height: '100%',
      }}
    >
      {props.children}
    </Paper>
  );
};

export const Gallery = (props: GalleryProps) => {
  return (
    <div>
      <Typography variant="h3">{props.title}</Typography>
      <Grid container spacing={1} justifyContent="center">
        {props.items.map((item, index) => (
          <Grid item xs={6} md={3} key={index}>
            <GalleryItem>{item}</GalleryItem>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
