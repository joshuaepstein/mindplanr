import { type Config } from 'tailwindcss';
import mindplanrPreset from '@mindplanr/tailwind';

const config = {
    content: [
      './src/**/*.{js,jsx,ts,tsx,mdx}',
      '../../packages/ui/src/**/*.{js,jsx,ts,tsx,mdx}',
    ],
    presets: [mindplanrPreset],
    darkMode: 'class',
    plugins: [],
} satisfies Config;

export default config;