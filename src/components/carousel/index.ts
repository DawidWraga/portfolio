export * from './CarouselWrapper';
export * from './CarouselContext';
export * from './Slides';
export * from './PreviewSlides';
export * from './ChangeSlideArrows';
export * from './SlideDescription';

import { ChangeSlideArrows } from 'components/carousel/ChangeSlideArrows';
import { PreviewSlides } from 'components/carousel/PreviewSlides';
import { SlideDescription } from 'components/carousel/SlideDescription';
import { Slides } from 'components/carousel/Slides';
import { CarouselWrapper } from './CarouselWrapper';

export const Carousel = {
	Wrapper: CarouselWrapper,
	Slides: Slides,
	PreviewSlides: PreviewSlides,
	ChangeSlideArrows: ChangeSlideArrows,
	SlideDescription: SlideDescription,
};
