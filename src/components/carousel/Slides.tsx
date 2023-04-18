import React from 'react';
import { Box, Flex, Show, useMediaQuery } from '@chakra-ui/react';
import { useCarouselContext } from 'components/carousel/CarouselContext';
import { ChangeSlideArrows } from 'components/carousel/ChangeSlideArrows';
import { PlayCarouselVideoButton } from 'components/carousel/play-carousel-video-button';
import { SlideLabel } from 'components/carousel/slide-label';
import { Image } from 'components/common/Image';
import { useMemo } from 'react';

interface IProps {}

export function Slides(props: IProps) {
	const {} = props;

	const { slides, currentSlide, videoIsPlaying, setVideoIsPlaying } =
		useCarouselContext();

	const carouselStyle = useMemo(
		() => ({
			transition: 'all .5s',
			ml: `-${currentSlide * 100}%`,
		}),
		[currentSlide]
	);

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
		<Flex w="100%" pos="relative" overflow="hidden">
			<Flex
				minH="clamp(400px, 60vh, 1500px)"
				w="100%"
				// pos="relative"
				{...carouselStyle}
			>
				<>
					{slides.map((slide, sid) => {
						return (
							<>
								<Box
									key={`slide-img-${sid}`}
									boxSize="full"
									shadow="md"
									flex="none"
									w="100%"
									h="auto"
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
												marginLeft: 'auto',
												marginRight: 'auto',
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
												width: '100%',
												height: 'auto',
											}}
										/>
									)}
								</Box>
							</>
						);
					})}
					{/* <PlayCarouselVideoButton /> */}
					<ChangeSlideArrows />
				</>
			</Flex>
		</Flex>
	);
}
