import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  variants: {
    outline: {
      bg: '#bab5a1',
      color: '#454138',
      borderColor: '#454138',
      _hover: {
        bg: '#454138',
        color: '#bab5a1',
      },
    },
  },
  defaultProps: {
    variant: 'outline',
  },
});
