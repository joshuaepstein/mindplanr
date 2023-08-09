import '@/styles/globals.css';
import { cn } from '@mindplanr/utils';
import localFont from 'next/font/local';

const rifficFree = localFont({ src: '../../public/_static/fonts/RifficFree-Bold.ttf', weight: 'bold' })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(rifficFree.className, "overflow-hidden")}>
      <body>{children}</body>
    </html>
  );
}
