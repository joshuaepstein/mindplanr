import Background from '@/components/app/home/background';
import Nav from '@/components/app/home/nav';
import { inter, rifficFree, satoshi } from '@/styles/fonts';
import '@/styles/globals.css';
import { constructMetadata } from '@mindplanr/utils/meta';
import React from 'react';
import { cn } from '../lib';
import Providers from './providers';

export const metadata = constructMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          rifficFree.variable,
          inter.variable,
          satoshi.variable,
          'font-sans',
        )}
      >
        <Providers>
          <div className="flex flex-col justify-between">
            {/* <MobileNav /> */}
            <Nav />
            {children}
            {/* <Footer /> */}
            <Background />
          </div>
        </Providers>
      </body>
    </html>
  );
}
