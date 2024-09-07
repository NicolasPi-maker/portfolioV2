/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#7e85fb',
				'primary-50': '#eef1ff',
				'text-default': '#4d4d4d',
			},
		},
	},
	plugins: [],
}
