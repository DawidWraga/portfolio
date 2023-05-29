import { Box, BoxProps, HStack } from '@chakra/react';
import { useCarouselContext } from 'components/carousel/CarouselContext';
import { Image } from 'components/common/Image';
import { useCarouselStore } from 'stores/use-carousel-store';

interface IProps extends BoxProps {
	imageProps?: any;
}

export function PreviewSlides(props: IProps) {
	const { imageProps, ...rest } = props;

	const { currentSlide, slides, setSlide } = useCarouselContext();

	return (
		<HStack
			pt={2}
			mx="auto"
			justify="center"
			// w="100%"
			// pos="absolute"
			// bottom="8px"
			minH="80px"
			// h="60px"
			overflowX="auto"
			overflowY="hidden"
			{...rest}
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
						// bottom={isActive ? '2px' : 0}
						_hover={{ cursor: 'pointer', opacity: 1, bottom: '2px' }}
						transition="opacity 0.3s ease, bottom 0.4s ease-in-out"
						onClick={() => setSlide(sid)}
						pos="relative"
					>
						<Image
							src={slide.imgPath}
							alt={slide.alt + ' preview'}
							// boxSize="full"
							// backgroundSize="cover"
							layout="fill"
							wrapperStyles={{
								// w: '100%',
								// h: '100%',
								w: '100%',
								h: '100%',

								rounded: 'md',
								border: '1px solid',
								transition: 'all 0.3s ease',
								borderColor: 'brand.900',
								...(isActive ? { borderColor: 'brand.700' } : {}),
								'&:hover': {
									borderColor: 'brand.700',
								},
								// mx: 'auto',
							}}
							imgStyles={{
								w: 'auto',
								h: '100%',
							}}
							{...imageProps}
						/>
					</Box>
				);
			})}
		</HStack>
	);
}
