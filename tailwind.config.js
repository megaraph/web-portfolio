/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html", // include root HTML
        "./src/**/*.{js,ts,jsx,tsx}", // include all React source files
    ],
    darkMode: "class",
    theme: {
        extend: {},
    },
    plugins: [],
};
