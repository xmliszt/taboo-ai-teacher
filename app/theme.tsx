// app/theme.tsx
'use client';

import { Grenze } from 'next/font/google';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

import { Button } from '@/theme/ButtonStyle';
const tailwind = resolveConfig(tailwindConfig);

const grenze = Grenze({
  weight: '400',
  subsets: ['latin'],
});

export const theme = extendTheme({
  fonts: {
    heading: 'var(--font-grenze)',
    body: 'var(--font-grenze)',
  },
  components: {
    Button,
  },
});

// theme.colors = tailwind.theme?.colors;

export function UIProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-grenze: ${grenze.style.fontFamily};
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </>
  );
}
