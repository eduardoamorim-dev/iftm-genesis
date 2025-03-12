export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",

        'blue-csc-p': '#0099DE',
        'blue-csc-h': '#0082C0',
      },
    },
  },
  plugins: [],
};
