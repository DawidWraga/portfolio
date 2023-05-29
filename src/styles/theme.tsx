import {
	extendTheme,
	StyleFunctionProps,
	type ThemeConfig,
} from '@chakra/react';

import { theme as baseTheme } from '@saas/react';

const shadePalette = {
	50: 'hsla(210, 13%, 53%, 1)',
	100: 'hsla(210, 28%, 48%, 1)',
	200: 'hsla(210, 33%, 43%, 1)',
	300: 'hsla(210, 35%, 38%, 1)',
	400: 'hsla(210, 35%, 33%, 1)',
	500: 'hsla(210, 35%, 28%, 1)',
	600: 'hsla(210, 35%, 23%, 1)',
	700: 'hsla(210, 32%, 18%, 1)',
	800: 'hsla(210, 28%, 13%, 1)',
	900: 'hsla(210, 23%, 8%, 1)',
};

const colors = {
	// brand: {
	// 	900: '#1a365d',
	// 	800: '#153e75',
	// 	700: '#2a69ac',
	// 	600: '#3c8dc5',
	// 	500: '#4faedf',
	// 	400: '#6fcdf2',
	// 	300: '#8ce2f9',
	// 	200: '#aedcff',
	// 	100: '#d4f0ff',
	// 	50: '#f3fbfe',
	// },
	brand: {
		900: 'rgb(2, 50, 86)',
		800: 'rgb(15, 94, 160)',
		700: 'rgb(29, 117, 202)',
		600: 'rgb(43, 140, 245)',
		500: 'rgb(66, 153, 225)',
		400: 'rgb(80, 163, 240)',
		300: 'rgb(170, 211, 255)',
		200: 'rgb(212, 235, 255)',
		100: 'rgb(235, 246, 255)',
		50: 'rgb(248, 253, 255)',
	},

	shade: shadePalette,
};

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const components = {
	Button: {
		baseStyles: {
			rounded: 'full',
			textTransform: 'capitalize',
		},
		// variants: {
		// 	ghost: (props: StyleFunctionProps) => ({
		// 		_hover: {
		// 			bg: 'red.500',
		// 		},
		// 	}),
		// },
	},
};

export const theme = extendTheme(
	{
		colors,
		config,
		components,
		styles: {
			// needed for app shell to work
			global: {
				body: {
					height: '100%',
				},
				'ul, ol': {
					listStyle: 'none',
				},
			},
		},
	}

	// baseTheme
);
