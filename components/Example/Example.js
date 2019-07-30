import React from 'react';
import { Box, Text } from '@phobon/base';

const Example = ({ text, ...props }) => (
  <Box {...props}>
    <Text>{text}</Text>
  </Box>
);

export default Example;