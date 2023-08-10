import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const rifficFree = localFont({
  src: '../../public/_static/fonts/RifficFree-Bold.ttf',
  weight: 'bold',
  variable: '--font-riffic-free',
  style: 'normal',
  display: 'swap',
});

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});
