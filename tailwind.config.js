const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
      },
      colors: {
        main: ["#BC2228"],
      },
      fontSize: {
        "3xxl": ["30px", "40px"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
