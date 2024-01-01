/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						a: {
							color: '#3182ce',
							'&:hover': {
								color: '#2c5282',
							},
						},
					},
				},
			},
			screens: {
				print: { raw: 'print' },
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
