import { Box, HStack } from '@chakra-ui/react';
import { useCarouselContext } from 'components/carousel/CarouselContext';
import { Image } from 'components/Image';

interface IProps {
	imageProps?: any;
}

export function PreviewSlides(props: IProps) {
	const { imageProps } = props;

	const { currentSlide, slides, setSlide } = useCarouselContext();

	return (
		<HStack
			pt={1}
			mx="auto"
			justify="center"
			w="100%"
			// pos="absolute"
			// bottom="8px"
			minH="80px"
			// h="60px"
		>
			{slides.map((slide, sid) => {
				const isActive = currentSlide === sid;
				return (
					<Box
						key={`preview-slide-${sid}`}
						// w={'clamp(60px, 20%, 150px)'}
						{...{
							width: 'clamp(60px, 18vw, 200px)',
							height: 'clamp(60px, 12vw, 120px)',
						}}
						shadow="md"
						flex="none"
						opacity={isActive ? 1 : 0.7}
						bottom={isActive ? '2px' : 0}
						_hover={{ cursor: 'pointer', opacity: 1, bottom: '2px' }}
						transition="opacity 0.3s ease, bottom 0.4s ease-in-out"
						onClick={() => setSlide(sid)}
						pos="relative"
					>
						<Image
							src={slide.img}
							alt="carousel image"
							// boxSize="full"
							// backgroundSize="cover"
							{...imageProps}
							layout="fill"
						/>
					</Box>
				);
			})}
		</HStack>
	);
}
