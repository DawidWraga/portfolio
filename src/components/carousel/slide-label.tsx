import { Flex, Heading, useMediaQuery } from '@chakra-ui/react';
import { useCarouselContext } from 'components/carousel/CarouselContext';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { CgImage } from 'react-icons/cg';

export interface SlideLabelProps {}

export function SlideLabel(props: SlideLabelProps) {
	const {} = props;

	const { currentSlide, slides, setVideoIsPlaying, videoIsPlaying } =
		useCarouselContext();
	const slide = slides[currentSlide];

	const text = slide?.alt;

	const hasVideo = slides[currentSlide]?.hasVideo ?? false;

	// if (!text) return null;

	const [isMobile] = useMediaQuery('(max-width: 600px)', {
		ssr: true,
		fallback: false,
	});

	const startColor = 'hsla(210, 35%, 23%, 0)';
	const endColor = 'hsla(210, 35%, 23%, 0.7)';

	return (
		<>
			<AnimatePresence exitBeforeEnter={isMobile}>
				{text && (
					<Flex
						data-label
						as={motion.div}
						key={text}
						bgColor="shade.600"
						py={2}
						px={6}
						justify="center"
						align="center"
						gap={2}
						color="white"
						_hover={{
							opacity: '1 !important',
							// transform: 'translateY(0px) !important',
							cursor: hasVideo ? 'pointer' : 'none',
						}}
						// transition="all 0.3s ease-in-out"
						onClick={() => {
							// if (videoIsPlaying) return;
							if (!hasVideo) return;
							// @ts-expect-error
							setVideoIsPlaying((prev) => !prev);
						}}
						{...(isMobile && {
							w: '100%',
							initial: { backgroundColor: startColor },
							animate: { backgroundColor: endColor },

							textAlign: 'center',
						})}
						{...(!isMobile && {
							initial: { y: '-50px', backgroundColor: startColor, opacity: 0 },
							animate: {
								y: 0,
								// y: videoIsPlaying ? '-20px' : 0,
								backgroundColor: endColor,
								opacity: videoIsPlaying ? 0.5 : 0.9,
								transition: {
									duration: 0.4,
								},
							},
							exit: {
								opacity: 0,
								backgroundColor: startColor,
								y: '-50px',
								duration: 0.4,
							},
							pos: 'absolute',
							top: 0,
							right: 0,
							zIndex: 9999,
							roundedBottomLeft: '2xl',
						})}
					>
						<Flex gap={2} align="center">
							{videoIsPlaying ? (
								<CgImage />
							) : (
								<BsFillPlayCircleFill fontSize="1.5rem" />
							)}
							<Heading fontSize="2xl">{videoIsPlaying ? '' : 'Watch'}</Heading>
						</Flex>
						<Heading fontSize="2xl" mx={isMobile ? 'auto' : 'unset'}>
							{text}
						</Heading>
					</Flex>
				)}
			</AnimatePresence>
		</>
	);
}
