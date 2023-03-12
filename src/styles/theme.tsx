import {
	extendTheme,
	StyleFunctionProps,
	type ThemeConfig,
} from '@chakra-ui/react';

import { theme as baseTheme } from '@saas-ui/react';

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
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
		600: '#3c8dc5',
		500: '#4faedf',
		400: '#6fcdf2',
		300: '#8ce2f9',
		200: '#aedcff',
		100: '#d4f0ff',
		50: '#f3fbfe',
	},
	shade: shadePalette,
};

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
};

const components = {
	Button: {
		variants: {
			ghost: (props: StyleFunctionProps) => ({
				_hover: {
					bg: 'red.500',
				},
			}),
		},
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
				'html, body': {
					height: '100%',
				},
			},
		},
	}

	// baseTheme
);
