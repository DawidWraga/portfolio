import { createContext } from 'utils/createContext';

export interface CarouselContext {
	currentSlide: number;
	setSlide: (slide: number) => void;
	slideCount: number;
	toPrevSlide: () => void;
	toNextSlide: () => void;
	slides: CarouselSlide[];
}

export type CarouselSlide = {
	img: string;
	label: string;
	description: string;
};

export const [CarouselProvider, useCarouselContext] =
	createContext<CarouselContext>({
		name: 'CarouselContext',
		errorMessage: 'useCarouselContext must be used within a CarouselProvider',
	});
