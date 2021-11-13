import { Box, BoxProps } from '@mui/material';

export const Section = (props: BoxProps) => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" maxWidth="1440px" {...props} />
);
