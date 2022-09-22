// pages/_app.js
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { GlobalContextProvider } from '../contexts/GlobalContext';
import theme from '../styles/theme';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<GlobalContextProvider>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</GlobalContextProvider>
	);
}

export default MyApp;
