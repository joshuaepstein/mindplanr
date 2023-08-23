'use client';

import { AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <AnimatePresence>{children}</AnimatePresence>
      <Toaster closeButton richColors />
    </>
  );
}
