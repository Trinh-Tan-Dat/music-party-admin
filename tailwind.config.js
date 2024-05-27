/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite/**/*.{js, jsx, ts, tsx}"
    ],
    theme: {
        extend: {
            spacing: {
                '460px': '460px',
            },
            colors: {
                'custom-gray': '#121212',
                'custom-green': '#1ED760',
                'custom-black': '#111827',
            },
        }
    },
    plugins: [
        require('flowbite/plugin')
    ],
}