import React from 'react';
import { Box, Flex, Show, useMediaQuery } from '@chakra-ui/react';
import { useCarouselContext } from 'components/carousel/CarouselContext';
import { ChangeSlideArrows } from 'components/carousel/ChangeSlideArrows';
import { PlayCarouselVideoButton } from 'components/carousel/play-carousel-video-button';
import { SlideLabel } from 'components/carousel/slide-label';
import { Image } from 'components/common/Image';
import { useMemo } from 'react';
import {
	AnimationOptions,
	PanInfo,
	animate,
	motion,
	useMotionValue,
} from 'framer-motion';

interface IProps {}

const containerStyle: React.CSSProperties = {
	position: 'relative',
	width: '100%',
	height: '100%',
	overflowX: 'hidden',
	display: 'flex',
};

const transition: AnimationOptions<any> = {
	type: 'spring',
	bounce: 0,
};

export function Slides(props: IProps) {
	const {} = props;

	const {
		slides,
		currentSlide,
		videoIsPlaying,
		setVideoIsPlaying,
		toPrevSlide,
		toNextSlide,
	} = useCarouselContext();

	const x = useMotionValue(0);
	const containerRef = React.useRef<HTMLDivElement>(null);
	// const [index, setIndex] = React.useState(0);

	const calculateNewX = () =>
		-currentSlide * (containerRef.current?.clientWidth || 0);

	const handleEndDrag = (e: Event, dragProps: PanInfo) => {
		const clientWidth = containerRef.current?.clientWidth || 0;

		const { offset } = dragProps;

		if (Math.abs(offset.x) < Math.abs(offset.y) * 1.4) return;

		if (offset.x > clientWidth / 4) {
			toPrevSlide();
		} else if (offset.x < -clientWidth / 4) {
			toNextSlide();
		} else {
			animate(x, calculateNewX(), transition);
		}
	};

	// const carouselStyle = useMemo(
	// 	() => ({
	// 		transition: 'all .5s',
	// 		x,
	// 		left: `${i * 100}%`,
	// 		right: `${i * 100}%`,
	// 	}),
	// 	[currentSlide]
	// );

	React.useEffect(() => {
		const controls = animate(x, calculateNewX(), transition);
		return controls.stop;
	}, [currentSlide]);

	const [isMobile] = useMediaQuery('(max-width: 600px)', {
		ssr: true,
		fallback: false,
	});

	const clickToPlay = React.useMemo(() => {
		if (!slides || !slides[currentSlide]) return false;
		if (!slides[currentSlide].hasVideo) return false;
		if (videoIsPlaying) return false;
		if (isMobile) return false;
		return true;
	}, [currentSlide, videoIsPlaying, isMobile]);

	return (
		<Flex w="100%" pos="relative" ref={containerRef} overflow="visible">
			<Flex
				minH="clamp(400px, 60vh, 1500px)"
				w="100%"
				pos="relative"
				overflow="hidden"
				// {...carouselStyle}
			>
				<>
					{slides.map((slide, sid) => {
						return (
							<>
								<Box
									as={motion.div}
									drag="x"
									// dragConstraints={{ left: 0, right: 0 }}
									dragElastic={0.3}
									dragMomentum={false}
									// style={}
									// pos="relative"
									onDragEnd={handleEndDrag}
									style={{
										x,
										left: `${sid * 100}%`,
										right: `${sid * 100}%`,
									}}
									display="inline-block"
									// onDragEnd={(e, { offset, velocity }) => {
									// 	const swipe = swipePower(offset.x, velocity.x);

									// 	if (swipe < -swipeConfidenceThreshold) {
									// 		toNextSlide();
									// 	} else if (swipe > swipeConfidenceThreshold) {
									// 		toPrevSlide();
									// 	}
									// }}
									key={`slide-img-${sid}`}
									boxSize="full"
									shadow="md"
									flex="none"
									w="100%"
									h="100%"
									{...(clickToPlay && {
										onClick: () => {
											setVideoIsPlaying(true);
										},
										_hover: {
											cursor: 'pointer',
										},
									})}
								>
									{videoIsPlaying ? (
										<video
											loop
											autoPlay
											controls
											style={{
												left: 'auto',
												right: 'auto',
												maxHeight: 'calc(100vh - 100px)',
											}}
										>
											<source src={slide.videoPath} type="video/mp4" />
											Your browser does not support videos.
										</video>
									) : (
										<Image
											key={'slide-' + sid}
											layout="fill"
											src={slide.imgPath}
											alt="carousel image"
											boxSize="full"
											backgroundSize="cover"
											imgStyles={{
												width: 'auto',
												height: '100%',
												objectFit: 'contain',
												position: 'static',
											}}
											wrapperStyles={{
												width: '100%',
												height: '100%',
												left: 'auto',
												right: 'auto',
												display: 'inline-block',
											}}
										/>
									)}
								</Box>
							</>
						);
					})}
					{/* <PlayCarouselVideoButton /> */}
				</>
			</Flex>
			<ChangeSlideArrows />
		</Flex>
	);
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};
