import { createContext } from 'utils/createContext';

export interface CarouselContext {
	currentSlide: number;
	setSlide: (slide: number) => void;
	slideCount: number;
	toPrevSlide: () => void;
	toNextSlide: () => void;
	slides: CarouselSlide[];
	videoIsPlaying: boolean;
	setVideoIsPlaying: (video: boolean) => void;
}

export type CarouselSlide = {
	alt?: string;
	hasVideo?: boolean;
	responsiveMediaPath?: string;
	mediaPath: string;
	imgPath: string;
	videoPath: string;
	desktopOnly?: boolean;
};

export const [CarouselProvider, useCarouselContext] =
	createContext<CarouselContext>({
		name: 'CarouselContext',
		errorMessage: 'useCarouselContext must be used within a CarouselProvider',
	});
