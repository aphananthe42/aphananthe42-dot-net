import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', ...defaultTheme.fontFamily.serif],
				notosansjp: ['Noto Sans JP Variable', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
}
