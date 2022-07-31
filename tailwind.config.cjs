const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{svelte,html}'],
	theme: {
		colors: {
			blue: {
				300: '#61C4B7',
				600: '#755CDE'
			},
			red: {
				300: '#F39E9E',
				600: '#EB7565',
				900: '#552049'
			},
			black: '#030303',
			white: '#FFF7F0',
			grey: '#7A746E',
			yellow: '#F6A560'
		},
		fontFamily: {
			jaka: ["'Plus Jakarta Sans'", 'sans-serif']
		}
	}
};
