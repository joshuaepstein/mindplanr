import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const rifficFree = localFont({
  src: '../../public/_static/fonts/RifficFree-Bold.ttf',
  weight: 'bold',
  variable: '--font-riffic-free',
  style: 'normal',
  display: 'swap',
});

export const satoshi = localFont({
  src: '../styles/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
  weight: '300 900',
  display: 'swap',
  style: 'normal',
});

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});
