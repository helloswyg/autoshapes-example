import { Box, BoxProps } from '@mui/material';

export const Section = (props: BoxProps) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="60vh"
    maxWidth="1440px"
    margin="auto"
    padding="5rem 0 5rem 0"
    {...props}
  />
);
