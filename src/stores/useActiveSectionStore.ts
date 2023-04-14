import { createStore } from 'utils/create-store';

interface IActiveSectionStore {
	activeSections: string[];
	addActiveSection: (section: string) => void;
	removeActiveSection: (section: string) => void;
}
export const useActiveSectionStore = createStore<IActiveSectionStore>(
	'User',
	(set) => ({
		activeSections: [],
		addActiveSection: (section: string) =>
			set((state) => ({ activeSections: [...state.activeSections, section] })),
		removeActiveSection: (section: string) =>
			set((state) => ({
				activeSections: state.activeSections.filter((s) => s !== section),
			})),
		// setActiveSection: (section: string) => set({ activeSection: section }),
	})
);
