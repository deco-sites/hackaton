import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: { container: { center: true } },
  extend: {
    colors: {
      "cold-color": {
        "50": "#f2f6fc",
        "100": "#e2ebf7",
        "200": "#cbddf2",
        "300": "#a8c7e8",
        "400": "#7eaadc",
        "500": "#5f8ed2",
        "600": "#4a73c4",
        "700": "#4162b4",
        "800": "#3a5193",
        "900": "#334675",
        "950": "#232c48",
      },
      'hot-color': {
        '50': '#fcf4f4',
        '100': '#fae6e6',
        '200': '#f6d2d2',
        '300': '#efb2b2',
        '400': '#e38686',
        '500': '#d55e5e',
        '600': '#c04242',
        '700': '#9e3333',
        '800': '#862e2e',
        '900': '#702c2c',
        '950': '#3c1313',
    },
    
    },
  },
};
