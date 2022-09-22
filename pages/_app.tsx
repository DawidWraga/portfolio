// pages/_app.js
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { GlobalContextProvider } from '../contexts/GlobalContext';
import theme from '../styles/theme';

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
	return (
		<GlobalContextProvider>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</GlobalContextProvider>
	);
}

export default MyApp;
