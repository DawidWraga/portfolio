'use client';

import { ModalsProvider, SaasProvider } from '@saas/react';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'app/_setup/toast-container';
import { MainLayout } from 'app/_main-layout/main-layout';
import { modals } from 'components/modals';
import NextLink from 'next/link';
import { theme } from 'styles/theme';
import 'styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import { CacheProvider } from '@chakra/next-js';
import { ColorModeScript } from '@chakra/react';
export interface ProvidersProps {
	children: React.ReactNode;
}

export function Providers(props: ProvidersProps) {
	const { children } = props;

	return (
		<>
			<CacheProvider>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<SaasProvider theme={theme} linkComponent={Link}>
					<ModalsProvider modals={modals}>
						<MainLayout>
							{children}
							<ToastContainer />
						</MainLayout>
					</ModalsProvider>
				</SaasProvider>
				<Analytics />
			</CacheProvider>
		</>
	);
}

const Link: React.FC<any> = (props) => {
	return <NextLink {...props} legacyBehavior />;
};
