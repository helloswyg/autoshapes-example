import { Box, BoxProps } from '@mui/material';

export const Section = (props: BoxProps) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="30rem"
    margin="auto"
    padding="3rem 0 3rem 0"
    position='relative'
    {...props}
  />
);
