import {type Config} from "tailwindcss";

import mindplanrPreset from "@mindplanr/tailwind";

const config = {
    content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
    presets: [mindplanrPreset],
    darkMode: 'class',
    theme: {extend: {}},
    plugins: []
} satisfies Config;

export default config;