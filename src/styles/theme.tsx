import {
	extendTheme,
	StyleFunctionProps,
	type ThemeConfig,
} from '@chakra-ui/react';

import { theme as baseTheme } from '@saas-ui/react';

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
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
