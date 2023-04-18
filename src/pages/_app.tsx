import NextLink from 'next/link';
import { SaasProvider, LinkProps, ModalsProvider } from '@saas-ui/react';
import { theme } from 'styles/theme';
import { AppProps } from 'next/app';
import { modals } from 'components/modals';
import { MainLayout } from 'components/layouts/MainLayout';
import 'styles/global.css';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'components/common/toast-container';
import { useCloseSidebarOnRouteChange } from 'hooks/use-close-sidebar-on-route-change';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	useCloseSidebarOnRouteChange();
	return (
		<>
			<SaasProvider theme={theme} linkComponent={Link}>
				<ModalsProvider modals={modals}>
					<MainLayout>
						<Component {...pageProps} />
						<ToastContainer />
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
