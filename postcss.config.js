const purgecss = [
    "@fullhuman/postcss-purgecss",
    {
        content: [
            "./pages/*.js",
            "./pages/**/*.js",
            "./components/*.js",
            "./components/**/*.js",
        ],
        whitelistPatterns: [/^slick-/,/^rounded-/,/^bg-/,/^p-/],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
];
module.exports = {
    plugins: [
        "postcss-import",
        "tailwindcss",
        "autoprefixer",
    ],
};
