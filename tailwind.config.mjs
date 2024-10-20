import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', ...defaultTheme.fontFamily.serif],
				notosansjp: ['Noto Sans JP', ...defaultTheme.fontFamily.serif],
			},
			animation: {
                "text-focus-in": "text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both"
            },
            keyframes: {
                "text-focus-in": {
                    "0%": {
                        filter: "blur(12px)",
                        opacity: "0"
                    },
                    to: {
                        filter: "blur(0)",
                        opacity: "1"
                    }
                }
            }
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
