module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (_) => ({
        falldrive: "url('/falldrive.jpg')",
      }),
    },
  },

  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
