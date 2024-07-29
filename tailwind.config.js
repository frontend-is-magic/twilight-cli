import { createVariableColors, variableColorsPlugin } from 'tailwindcss-variable-colors'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: createVariableColors(colors),
        extend: {}
    },
    darkMode: ['class'],
    plugins: [variableColorsPlugin(colors)]
}
