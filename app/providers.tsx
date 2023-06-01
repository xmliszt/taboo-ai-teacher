// app/providers.tsx
"use client";

import { Grenze } from "next/font/google";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const grenze = Grenze({
  weight: "400",
  subsets: ["latin"],
  fallback: [
    "ui-serif",
    "Georgia",
    "Cambria",
    "Times New Roman",
    "Times",
    "serif",
  ],
});

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-grenze)",
    body: "var(--font-grenze)",
  },
  colors: {
    brand: {},
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
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
