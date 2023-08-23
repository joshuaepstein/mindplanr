import '@/styles/globals.css';

import React from 'react';

import { inter, rifficFree, satoshi } from '@/styles/fonts';
import { cn } from '@mindplanr/utils/cn';
import { constructMetadata } from '@mindplanr/utils/meta';
import Providers from './providers';

export const metadata = constructMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          rifficFree.variable,
          inter.variable,
          satoshi.variable,
          'font-sans',
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
