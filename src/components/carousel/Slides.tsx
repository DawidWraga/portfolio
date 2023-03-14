import { Box, Flex, ImageProps, Stack, Text } from '@chakra-ui/react';
import { CardMedia } from '@saas-ui/react';
import { useCarouselContext } from 'components/carousel/CarouselContext';
import { ChangeSlideArrows } from 'components/carousel/ChangeSlideArrows';
import { motion } from 'framer-motion';
import { getLayoutIds } from 'pages/work';
import { useMemo } from 'react';

interface IProps {
	imageProps?: ImageProps;
}

export function Slides(props: IProps) {
	const { imageProps } = props;

	const { slides, currentSlide } = useCarouselContext();

	const carouselStyle = useMemo(
		() => ({
			transition: 'all .5s',
			ml: `-${currentSlide * 100}%`,
		}),
		[currentSlide]
	);

	return (
		<Flex w="100%" pos="relative" overflow="hidden">
			<Flex
				h="clamp(400px, 60vh, 1500px)"
				w="100%"
				// pos="relative"
				{...carouselStyle}
			>
				<>
					{slides.map((slide, sid) => {
						let conditionalProps = {};
						const isFirst = sid === 0;
						if (isFirst) {
							const layoutIds = getLayoutIds(sid.toString());
							conditionalProps = { as: motion.div, layoutId: layoutIds.img };
						}

						const isActive = currentSlide === sid;

						return (
							<Box key={'slide-' + sid} boxSize="full" shadow="md" flex="none">
								<CardMedia
									bgImage={slide.img}
									alt="carousel image"
									boxSize="full"
									backgroundSize="cover"
									as={motion.div}
									{...conditionalProps}
									{...imageProps}
								/>
								{/* <Stack
							pos="absolute"
							// textAlign="center"
							w="full"
							// color="white"
							// bgColor="blackAlpha.400"
							// py="10px"
							bottom="1rem"
							left={0}
							opacity={isActive ? 1 : 0}
							transition="opacity 0.4s ease"
						>
							<ControllerBanner
								label={slide.label}
								description={slide.description}
							/>
						</Stack> */}
								{/* <Stack
									pos="absolute"
									// textAlign="center"
									w="full"
									px="1rem"
									color="white"
									bgColor={'whiteAlpha.200'}
									// py="10px"
									// bottom="1rem"
									left={0}
									// top={isActive ? 'unset' : '10px'}
									bottom={isActive ? '2px' : '-20px'}
									opacity={isActive ? 1 : 0}
									transition="opacity 0.4s ease, bottom 0.4s ease"
									flexDir={'row'}
									gap={2}
									alignItems="flex-end"
									justifyContent={'flex-start'}
									flexWrap="wrap"
								>
									<Text
										fontSize="1.5rem"
										fontWeight={'extrabold'}
										color="red.500"
										textTransform={'uppercase'}
										display="inline-block"
									>
										{slide.label}
									</Text>
									<Text
										display="inline-block"
										fontSize="1.4rem"
										color={'slategrey'}
										fontWeight={500}
										position="relative"
										// bottom="4px"
									>
										{slide.description}
									</Text>
								</Stack> */}
							</Box>
						);
					})}
					<ChangeSlideArrows />
				</>
			</Flex>
		</Flex>
	);
}
