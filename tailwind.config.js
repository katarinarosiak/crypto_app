/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
  theme: {
    extend: {
			colors: {
				dark: "rgb(24, 21, 31)",
				style_green: "rgb(9,147,137)",
				style_blue: "rgb(2,171,203)",
				style_red: "rgb(206, 22, 22)"
			}
		},
  },
	variants: {
		extend: {
			backgroundColor: ['checked'],
		},
	},
  plugins: [
  
	],
}
