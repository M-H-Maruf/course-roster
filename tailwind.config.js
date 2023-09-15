/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "course-primary": "#1C1B1B",
            "course-secondary": "#2F80ED",
            "course-diluted": "#1C1B1B80",
            "course-dil": "#1C1B1B60",
            "course-background": "#F3F3F3",
        },
    },
},
  plugins: [],
}