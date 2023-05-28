'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLayoutStore } from 'stores/use-layout-store';
import { useActiveSectionStore } from 'stores/useActiveSectionStore';
export function NavigationEvents() {
	const { closeSidebar } = useLayoutStore();
	const { setActiveSections } = useActiveSectionStore();

	return (
		<Suspense fallback={null}>
			<EmptyNavigationEvents
				fn={() => {
					closeSidebar();
					setActiveSections([]);
				}}
			/>
		</Suspense>
	);
}

/***
 * @explain
 * <NavigationEvents> is wrapped in a Suspense boundary because useSearchParams() causes client-side rendering up to the closest Suspense boundary during static rendering
 *
 * @see
 * https://nextjs.org/docs/app/api-reference/functions/use-search-params#behavior
 */

// setup component for handing navigation events
export function EmptyNavigationEvents(props: { fn: (url: string) => void }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const queryString = searchParams ? searchParams.toString() : '';
		const url = pathname + queryString;
		props.fn(url);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname, searchParams]);

	return null;
}
