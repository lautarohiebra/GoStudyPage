/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["cupcake",
      {
        mytheme: {
          primary: "#5263EF",

          secondary: "#88f3ec",

          accent: "#67e8f9",

          neutral: "#111111",

          "base-100": "#f5f5f5",

          info: "#67e8f9",

          success: "#86efac",

          warning: "#f7e488",

          error: "#f43f5e",
        },
      },
    ],
  },
};
