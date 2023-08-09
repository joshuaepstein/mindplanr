declare const config: {
    content: string[];
    darkMode: "class";
    theme: {
        container: {
            center: true;
            padding: string;
            screens: {
                '2xl': string;
            };
        };
        extend: {
            fontFamily: {
                sans: [string, string, string, ...string[]];
                stock: string[];
                mono: [string, ...string[]];
            };
            colors: {
                primary: {
                    DEFAULT: string;
                    50: string;
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                    900: string;
                    950: string;
                };
            };
            boxShadow: {
                glow: string;
                'glow-2': string;
            };
            opacity: {
                1: string;
                2.5: string;
                7.5: string;
                15: string;
            };
            keyframes: {
                "accordion-down": {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
                "accordion-up": {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
                "slide-up-fade": {
                    "0%": {
                        opacity: string;
                        transform: string;
                    };
                    "100%": {
                        opacity: string;
                        transform: string;
                    };
                };
                "slide-right-fade": {
                    "0%": {
                        opacity: string;
                        transform: string;
                    };
                    "100%": {
                        opacity: string;
                        transform: string;
                    };
                };
                "slide-down-fade": {
                    "0%": {
                        opacity: string;
                        transform: string;
                    };
                    "100%": {
                        opacity: string;
                        transform: string;
                    };
                };
                "slide-left-fade": {
                    "0%": {
                        opacity: string;
                        transform: string;
                    };
                    "100%": {
                        opacity: string;
                        transform: string;
                    };
                };
                "enter-from-right": {
                    "0%": {
                        transform: string;
                        opacity: string;
                    };
                    "100%": {
                        transform: string;
                        opacity: string;
                    };
                };
                "enter-from-left": {
                    "0%": {
                        transform: string;
                        opacity: string;
                    };
                    "100%": {
                        transform: string;
                        opacity: string;
                    };
                };
                "exit-to-right": {
                    "0%": {
                        transform: string;
                        opacity: string;
                    };
                    "100%": {
                        transform: string;
                        opacity: string;
                    };
                };
                "exit-to-left": {
                    "0%": {
                        transform: string;
                        opacity: string;
                    };
                    "100%": {
                        transform: string;
                        opacity: string;
                    };
                };
                "scale-in-content": {
                    "0%": {
                        transform: string;
                        opacity: string;
                    };
                    "100%": {
                        transform: string;
                        opacity: string;
                    };
                };
                "scale-out-content": {
                    "0%": {
                        transform: string;
                        opacity: string;
                    };
                    "100%": {
                        transform: string;
                        opacity: string;
                    };
                };
                wiggle: {
                    "0%, 100%": {
                        transform: string;
                        transformOrigin: string;
                    };
                    "15%": {
                        transform: string;
                    };
                    "30%": {
                        transform: string;
                    };
                    "45%": {
                        transform: string;
                    };
                    "60%": {
                        transform: string;
                    };
                    "75%": {
                        transform: string;
                    };
                };
                "slide-down-left-fade": {
                    "0%": {
                        opacity: string;
                        transform: string;
                    };
                    "100%": {
                        opacity: string;
                        transform: string;
                    };
                };
                "slide-down-out-fade": {
                    "0%": {
                        opacity: string;
                        transform: string;
                    };
                    "100%": {
                        opacity: string;
                        transform: string;
                    };
                };
                "change-object-location": {
                    "0%": {
                        "object-position": string;
                    };
                    "50%": {
                        "object-position": string;
                    };
                    "100%": {
                        "object-position": string;
                    };
                };
                "change-object-to-top": {
                    "0%": {};
                    "100%": {
                        "object-position": string;
                    };
                };
            };
            animation: {
                "accordion-down": string;
                "accordion-up": string;
                "slide-up-fade": string;
                "slide-right-fade": string;
                "slide-down-fade": string;
                "slide-left-fade": string;
                "enter-from-right": string;
                "enter-from-left": string;
                "exit-to-right": string;
                "exit-to-left": string;
                "scale-in-content": string;
                "scale-out-content": string;
                "fade-in": string;
                "fade-out": string;
                wiggle: string;
                "slide-down-left-fade": string;
                "object-location": string;
                "object-to-top": string;
            };
            screens: {
                xs: string;
            };
        };
    };
    plugins: any[];
};
export default config;
