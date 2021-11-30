import { Box, BoxProps } from '@mui/material';

export const Section = (props: BoxProps) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="30rem"
    margin="auto"
    padding={{ xs: '3rem 0rem', md: '3rem 5rem' }}
    position="relative"
    {...props}
  />
);
