/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-yellow": "#FDF901",
				"primary-green": "#003D10",
				"primary-black": "#000000",
				"light-green": "#66BB6A",
				"light-black": "#263238",
				"secondary-primary": "#324148",
				"secondary-white": "#E2EFD2",
			},
		},
	},
	plugins: [],
};
