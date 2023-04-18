import { createStore } from 'utils/create-store';

interface CarouselStore {
	isMobileView: boolean;
	setIsMobileView: (isMobileView: boolean) => void;
	toggleIsMobileView: () => void;
}

export const useCarouselStore = createStore<CarouselStore>(
	'CarouselStore',
	(set) => ({
		isMobileView: false,
		setIsMobileView: (isMobileView) => set({ isMobileView }),
		toggleIsMobileView: () =>
			set((state) => ({ isMobileView: !state.isMobileView })),
	})
);
