import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      'redhat': ['Red Hat Text', 'sans-serif'],
    },
    borderStyles: {
      styles: true
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".border-t-solid": {
          "border-top-style": "solid",
        },
        ".border-t-dashed": {
          "border-top-style": "dashed",
        },
        ".border-t-dotted": {
          "border-top-style": "dotted",
        },
        ".border-t-double": {
          "border-top-style": "double",
        },
        ".border-t-none": {
          "border-top-style": "none",
        },
        ".border-r-solid": {
          "border-right-style": "solid",
        },
        ".border-r-dashed": {
          "border-right-style": "dashed",
        },
        ".border-r-dotted": {
          "border-right-style": "dotted",
        },
        ".border-r-double": {
          "border-right-style": "double",
        },
        ".border-r-none": {
          "border-right-style": "none",
        },
        ".border-b-solid": {
          "border-bottom-style": "solid",
        },
        ".border-b-dashed": {
          "border-bottom-style": "dashed",
        },
        ".border-b-dotted": {
          "border-bottom-style": "dotted",
        },
        ".border-b-double": {
          "border-bottom-style": "double",
        },
        ".border-b-none": {
          "border-bottom-style": "none",
        },
        ".border-l-solid": {
          "border-left-style": "solid",
        },
        ".border-l-dashed": {
          "border-left-style": "dashed",
        },
        ".border-l-dotted": {
          "border-left-style": "dotted",
        },
        ".border-l-double": {
          "border-left-style": "double",
        },
        ".border-l-none": {
          "border-left-style": "none",
        },
      })
    })
  ],
}
export default config
