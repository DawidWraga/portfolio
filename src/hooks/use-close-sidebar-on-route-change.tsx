import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useLayoutStore } from 'stores/use-layout-store';

export interface UseCloseSidebarOnRouteChangeProps {}

export function useCloseSidebarOnRouteChange(
	props?: UseCloseSidebarOnRouteChangeProps
) {
	const {} = props || {};

	const { closeSidebar } = useLayoutStore();

	//TODO: fix bug where sidebar doesn't close on home page
	const router = useRouter();
	useEffect(() => {
		router.events.on('routeChangeStart', closeSidebar);
	}, [router.events]);
}
