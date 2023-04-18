import { useMediaQuery } from '@chakra-ui/react';
import { CarouselProvider } from 'components/carousel/CarouselContext';
import { ProjectCarouselData } from 'config/projects';
import React, { useState } from 'react';
import { useCarouselStore } from 'stores/use-carousel-store';

interface IProps {
	children: React.ReactNode;
	slides: ProjectCarouselData[];
}

export function CarouselWrapper(props: IProps) {
	const { children, slides } = props;

	const [currentSlide, setCurrentSlide] = useState<number>(0);

	const slideCount = slides.length;

	const [videoIsPlaying, setVideoIsPlaying] = useState<boolean>(false);

	const toPrevSlide = () => {
		setCurrentSlide((s) => (s === 0 ? slideCount - 1 : s - 1));
	};
	const toNextSlide = () => {
		setCurrentSlide((s) => (s === slideCount - 1 ? 0 : s + 1));
	};

	React.useEffect(() => {
		const interval = setInterval(() => {
			if (!videoIsPlaying) {
				toNextSlide();
			}
		}, 5000);
		return () => clearInterval(interval);
	}, [currentSlide, videoIsPlaying]);

	React.useEffect(() => {
		if (videoIsPlaying) return;
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'ArrowLeft') {
				toPrevSlide();
			} else if (event.key === 'ArrowRight') {
				toNextSlide();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [currentSlide, videoIsPlaying]);

	React.useEffect(() => {
		const handleTouchStart = (event: TouchEvent) => {
			const touch = event.touches[0];
			const startX = touch.clientX;
			const startY = touch.clientY;

			const handleTouchMove = (event: TouchEvent) => {
				const touch = event.touches[0];
				const endX = touch.clientX;
				const endY = touch.clientY;

				const diffX = endX - startX;
				const diffY = endY - startY;

				if (Math.abs(diffX) > Math.abs(diffY)) {
					if (diffX > 0) {
						toPrevSlide();
					} else {
						toNextSlide();
					}
				}
			};

			window.addEventListener('touchmove', handleTouchMove);

			return () => {
				window.removeEventListener('touchmove', handleTouchMove);
			};
		};

		window.addEventListener('touchstart', handleTouchStart);

		return () => {
			window.removeEventListener('touchstart', handleTouchStart);
		};
	}, [currentSlide]);

	React.useEffect(() => {
		if (videoIsPlaying) setVideoIsPlaying(false);
	}, [currentSlide]);

	const setSlide = (slide: number) => setCurrentSlide(slide);

	const [isMobile] = useMediaQuery('(max-width: 600px)', {
		ssr: true,
		fallback: false,
	});

	const { isMobileView, setIsMobileView } = useCarouselStore();

	React.useEffect(() => {
		if (!videoIsPlaying) return;

		setVideoIsPlaying(false);
		setTimeout(() => {
			setVideoIsPlaying(true);
		}, 400);
	}, [isMobileView]);

	React.useEffect(() => {
		if (isMobileView) setIsMobileView(false);
	}, [slides]);

	const responsiveSlides = slides.map((slide) => {
		const responsiveMediaPath = `${slide.mediaPath}/${
			(isMobile || isMobileView) && !slide.desktopOnly ? 'mobile' : 'desktop'
		}`;

		return {
			...slide,
			responsiveMediaPath,
			imgPath: responsiveMediaPath + '.png',
			videoPath: responsiveMediaPath + '.mp4',
		};
	});

	return (
		<CarouselProvider
			value={{
				currentSlide,
				setSlide,
				slideCount,
				toPrevSlide,
				toNextSlide,
				slides: responsiveSlides,
				videoIsPlaying,
				setVideoIsPlaying,
			}}
		>
			{children}
		</CarouselProvider>
	);
}
