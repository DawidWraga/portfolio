'use client';

import { ModalsProvider, SaasProvider } from '@saas-ui/react';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'components/common/toast-container';
import { MainLayout } from 'components/layouts/MainLayout';
import { modals } from 'components/modals';
import NextLink from 'next/link';
import { theme } from 'styles/theme';
import 'styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import { CacheProvider } from '@chakra-ui/next-js';
export interface ProvidersProps {
	children: React.ReactNode;
}

export function Providers(props: ProvidersProps) {
	const { children } = props;

	return (
		<>
			<CacheProvider>
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
