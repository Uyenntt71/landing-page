module.exports = {
    content: [
        "./pages/*.js",
        "./pages/**/*.js",
        "./components/*.js",
        "./components/**/*.js",
    ],
    darkMode: "class",
    theme: {
        boxShadow: {
            sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            DEFAULT:
                "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            orange: "0px 20px 20px -15px rgba(245,56,56,0.81) ",
            "orange-md": "0px 20px 40px -15px rgba(245,56,56,0.81) ",
            none: "none",
        },
        colors: {
            transparent: "transparent",
            black: {
                500: "#4F5665",
                600: "#0B132A",
            },
            orange: {
                100: "#FFECEC",
                300: "#fdba74",
                500: "#F53855",
            },
            green: {
                500: "#2FAB73",
            },
            white: {
                300: "#F8F8F8",
                500: "#fff",
            },
            gray: {
                100: "#EEEFF2",
                400: "#AFB5C0",
                500: "#DDDDDD",
            },
            dark_blue: {
                500: "#0FA3B1",
            }
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    variants: {
        extend: {
            boxShadow: ["active", "hover"],
        },
    },
    plugins: [],
};
