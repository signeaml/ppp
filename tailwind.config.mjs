/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        beige: "#F1EFE9",
        rød: "#C92A2A",
        mørkerød: "#440606",
      },
      fontFamily: {
        // Tilføj Kulim Park fonten her
        kulim: ["Kulim Park", "sans-serif"],
        montseerat: ["Montserrat", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite", // Tilføj en langsommere spin animation
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
