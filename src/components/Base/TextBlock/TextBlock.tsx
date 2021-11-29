import { Typography } from '@mui/material';
import { ReactNode } from 'react';

type TextBlockProps = {
  title: ReactNode;
};

export const TextBlock: React.FC<TextBlockProps> = (props) => {
  return (
    <div style={{ display: 'block' }}>
      <Typography variant="h2">{props.title}</Typography>
      <Typography variant="body1">{props.children}</Typography>
    </div>
  );
};
