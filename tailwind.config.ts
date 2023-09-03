import type { Config } from 'tailwindcss';
export default <Partial<Config>>{
	// darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'soft-white': '#F5F5F7',
				'dark-gray': '#212121',
				'navy-gray': '#1D1D1F'
			}
		}
	},
	plugins: [],
	content: []
};
