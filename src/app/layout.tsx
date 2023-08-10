import '@/styles/globals.css';

import localFont from 'next/font/local';
import React from 'react';

import { cn } from '@mindplanr/utils/cn';
import { constructMetadata } from '@mindplanr/utils/meta';

const rifficFree = localFont({
  src: '../../public/_static/fonts/RifficFree-Bold.ttf',
  weight: 'bold',
});

export const metadata = constructMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(rifficFree.className, 'overflow-hidden')}>
      <head />
      <body>{children}</body>
    </html>
  );
}
