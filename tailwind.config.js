/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	safelist: [
		'bg-red-600',
		'bg-green-600',
		'bg-yellow-600',
		'bg-purple-600',
		'bg-blue-600',
	],
	plugins: [],
};
