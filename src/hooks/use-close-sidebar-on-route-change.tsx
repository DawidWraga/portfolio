import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useLayoutStore } from 'stores/use-layout-store';
import { useActiveSectionStore } from 'stores/useActiveSectionStore';

export interface UseCloseSidebarOnRouteChangeProps {}

export function useCloseSidebarOnRouteChange(
	props?: UseCloseSidebarOnRouteChangeProps
) {
	const {} = props || {};

	const { closeSidebar } = useLayoutStore();
	const { setActiveSections } = useActiveSectionStore();

	//TODO: fix bug where sidebar doesn't close on home page
	const router = useRouter();
	useEffect(() => {
		router.events.on('routeChangeStart', () => {
			closeSidebar();

			setActiveSections([]);
		});
		// router.events.on(
		// 	'routeChangeComplete',
		// 	setActiveSections([]) as unknown as () => any
		// );
	}, [router.events]);
}
