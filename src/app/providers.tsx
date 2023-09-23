'use client';

import { AnimatePresence } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <SessionProvider>
        <AnimatePresence>{children}</AnimatePresence>
        <Toaster closeButton richColors />
      </SessionProvider>
    </>
  );
}
