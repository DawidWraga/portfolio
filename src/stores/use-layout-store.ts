import { createStore } from 'utils/create-store';

interface ILayoutStore {
	sidebarIsOpen: boolean;
	openSidebar: () => void;
	closeSidebar: () => void;
	toggleSidebar: () => void;
}
export const useLayoutStore = createStore<ILayoutStore>(
	'Layout store',
	(set) => ({
		sidebarIsOpen: false,
		openSidebar: () => {
			set({ sidebarIsOpen: true });
			//prevent scrolling when sidebar is open
			// timeout used to make layout shift less visible
			setTimeout(() => {
				document.body.style.overflow = 'hidden';
			}, 450);
		},
		closeSidebar: () => {
			set({ sidebarIsOpen: false });
			//re-enable scrolling when sidebar is closed
			document.body.style.overflow = 'unset';
		},
		toggleSidebar: () =>
			set((state) => {
				const sidebarIsOpen = !state.sidebarIsOpen;
				// prevent scrolling when sidebar is open
				if (sidebarIsOpen) {
					setTimeout(() => {
						document.body.style.overflow = 'hidden';
					}, 450);
				} else {
					document.body.style.overflow = 'unset';
				}

				return { sidebarIsOpen };
			}),
	})
);
