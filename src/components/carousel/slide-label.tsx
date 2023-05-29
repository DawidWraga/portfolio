import {
	Flex,
	Heading,
	useBreakpointValue,
	useMediaQuery,
} from '@chakra/react';
import { useCarouselContext } from 'components/carousel/CarouselContext';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { CgImage } from 'react-icons/cg';

export interface SlideLabelProps {}

export function SlideLabel(props: SlideLabelProps) {
	const {} = props;

	const { currentSlide, slides, setVideoIsPlaying, videoIsPlaying } =
		useCarouselContext();
	const slide = slides[currentSlide ?? 0];

	const text = slide?.alt;

	const hasVideo = slides[currentSlide]?.hasVideo;

	// if (!text) return null;

	const [isMobile] = useMediaQuery('(max-width: 600px)', {
		ssr: true,
		fallback: false,
	});

	const startColor = 'hsla(210, 35%, 23%, 0)';
	const endColor = 'hsla(210, 35%, 23%, 0.7)';

	const backToImageText = isMobile ? 'Back to Image' : '';
	return (
		<>
			<AnimatePresence exitBeforeEnter={isMobile} initial={true}>
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
						flexDir={isMobile ? 'column-reverse' : 'row'}
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
							bgColor: 'hsla(210, 35%, 23%, 0.7) !important',
							w: '100%',
							transform: 'translateY(0px) !important',
							opacity: '1 !important',
							// initial: { backgroundColor: endColor },
							// animate: { backgroundColor: endColor },

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
						{hasVideo && (
							<Flex gap={2} align="center">
								{videoIsPlaying ? (
									<CgImage fontSize="1.5rem" />
								) : (
									<BsFillPlayCircleFill fontSize="1.5rem" />
								)}
								<Heading fontSize="2xl">
									{videoIsPlaying ? backToImageText : 'Watch'}
								</Heading>
							</Flex>
						)}
						<Flex align="center" gap={2}>
							{!hasVideo && <CgImage fontSize="1.5rem" />}

							<Heading fontSize="2xl" mx={isMobile ? 'auto' : 'unset'}>
								{text}
							</Heading>
						</Flex>
					</Flex>
				)}
			</AnimatePresence>
		</>
	);
}
