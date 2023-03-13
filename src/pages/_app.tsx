import NextLink from 'next/link';
import { SaasProvider, LinkProps, ModalsProvider } from '@saas-ui/react';
import { theme } from 'styles/theme';
import { AppProps } from 'next/app';
import { modals } from 'components/modals';
import { MainLayout } from 'components/layouts/MainLayout';
import 'styles/global.css';
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<SaasProvider theme={theme} linkComponent={Link}>
				<ModalsProvider modals={modals}>
					<MainLayout>
						<Component {...pageProps} />
					</MainLayout>
				</ModalsProvider>
			</SaasProvider>
			<Analytics />
		</>
	);
}

const Link: React.FC<any> = (props) => {
	return <NextLink {...props} legacyBehavior />;
};
