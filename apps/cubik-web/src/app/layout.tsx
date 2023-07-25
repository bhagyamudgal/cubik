'use client';

import { ChakraProvider } from '@chakra-ui/react';

import { VStack } from '../utils/chakra';
import theme from '~/config/chakra.config';

import { Plus_Jakarta_Sans } from 'next/font/google';
import WalletContext from '~/context/wallet-context';
import AppLayout from '~/layouts/AppLayout';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jakarta.className}`}>
        <WalletContext>
          <ChakraProvider theme={theme}>
            <AppLayout>
              <VStack maxW="full" w="100%" h="100vh" p="0" bg="black" color="white">
                {children}
              </VStack>
            </AppLayout>
          </ChakraProvider>
        </WalletContext>
      </body>
    </html>
  );
}
