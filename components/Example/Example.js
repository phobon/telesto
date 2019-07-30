import React from 'react';
import { Box, Text } from '@phobon/base';

const Example = ({ text, children, ...props }) => (
  <Box {...props}>
    <Text>{text}</Text>
    {children}
  </Box>
);

export default Example;