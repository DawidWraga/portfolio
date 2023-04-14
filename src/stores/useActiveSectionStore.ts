import { createStore } from 'utils/create-store';

interface IActiveSectionStore {
	activeSections: string[];
	addActiveSection: (section: string) => void;
	removeActiveSection: (section: string) => void;
	setActiveSections: (sections: string[]) => void;
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
		setActiveSections: (sections: string[] = []) =>
			set({ activeSections: sections }),
	})
);
