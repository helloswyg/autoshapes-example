import { Paper, Typography, Container, Box, useTheme } from '@mui/material';
import { ReactNode } from 'react';

type TextBlockProps = {
  title: ReactNode;
};

export const TextBlock: React.FC<TextBlockProps> = (props) => {
  const theme = useTheme();
  return (
    <Paper sx={{ opacity: 0.95 }}>
      <Box padding={theme.spacing(10, 4)}>
        <Typography variant="h2">{props.title}</Typography>
        <Typography variant="body1">{props.children}</Typography>
      </Box>
    </Paper>
  );
};
