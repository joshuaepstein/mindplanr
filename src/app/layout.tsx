import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import React from 'react';

import { inter, rifficFree } from '@/styles/fonts';
import { cn } from '@mindplanr/utils/cn';
import { constructMetadata } from '@mindplanr/utils/meta';

export const metadata = constructMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn('overflow-hidden')}>
      <head />
      <body className={cn(rifficFree.variable, inter.variable)}>
        {children}
        <Analytics debug={false} />
      </body>
    </html>
  );
}
