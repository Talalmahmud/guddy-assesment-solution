/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
        colors: {
            bodyBg: "#d9d9d9",
            textColor: "#142B33",
            testColor: "#4531",
            white: "#fff",
            red: "#F63131",
            checkoutText: "#879fa8",
            hoverColor: "#d0d0c0",
        },
    },
    plugins: [],
};
