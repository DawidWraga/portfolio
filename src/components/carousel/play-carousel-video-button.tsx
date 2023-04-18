import { Box, Button, useBreakpointValue } from '@chakra-ui/react';
import { PlayVideoButton } from 'components/buttons/play-video-button';
import { useCarouselContext } from 'components/carousel/CarouselContext';
import { AnimatePresence, motion } from 'framer-motion';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { CgImage } from 'react-icons/cg';
export interface PlayCarouselVideoButtonProps {}

export function PlayCarouselVideoButton(props: PlayCarouselVideoButtonProps) {
	const {} = props;

	const { slides, currentSlide, setVideoIsPlaying, videoIsPlaying } =
		useCarouselContext();

	const hasVideo = slides[currentSlide]?.hasVideo ?? false;
	if (!hasVideo) return null;

	const yValueDuringVideo = useBreakpointValue({
		base: 0,
		md: '28px',
	});

	return (
		<>
			{/* <Box
				pos="absolute"
				bottom={4}
				zIndex={9999999}
				left="calc(50% - 100px)"
				// transform="translateX(-50%)"
			> */}
			<AnimatePresence exitBeforeEnter>
				{hasVideo && (
					<Button
						w="210px"
						size="lg"
						transition="all 0.2s ease"
						leftIcon={videoIsPlaying ? <CgImage /> : <BsFillPlayCircleFill />}
						as={motion.button}
						key={'play-video-btn-' + currentSlide}
						left="calc(50% - 105px)"
						zIndex={9999999}
						pos="absolute"
						bottom={2}
						_hover={{
							opacity: '1 !important',
							transform: 'translateY(0px) !important',
						}}
						// {...(!videoIsPlaying && {
						// 	opacity: 0.6,
						// 	bottom: '-4px',
						// })}
						initial={{
							opacity: 0,
							y: '50px',
						}}
						animate={{
							opacity: 0.5,
							y: videoIsPlaying ? yValueDuringVideo : 0,
							transition: {
								duration: 0.1,
							},
						}}
						exit={{
							opacity: 0,
							y: '50px',
						}}
						// opacity={videoIsPlaying ? 0 : 1}
						// transition={'all 0.5s ease-in-out'}
						colorScheme={videoIsPlaying ? 'whiteAlpha' : 'brand'}
						onClick={() => {
							// if (videoIsPlaying) return;
							if (!hasVideo) return;
							// @ts-expect-error
							setVideoIsPlaying((prev) => !prev);
						}}
					>
						{videoIsPlaying ? 'Preview image' : ' Watch Current Slide'}
					</Button>
				)}
			</AnimatePresence>
			{/* </Box> */}
		</>
	);
}
