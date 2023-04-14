import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { CardMedia } from '@saas-ui/react';
import { useCarouselContext } from 'components/carousel/CarouselContext';
import { ChangeSlideArrows } from 'components/carousel/ChangeSlideArrows';
import { SlideDescription } from 'components/carousel/SlideDescription';
import { Image, ImageProps } from 'components/common/Image';
import { motion } from 'framer-motion';
import { getLayoutIds } from 'pages/work';
import { useMemo } from 'react';

interface IProps {
	imageProps?: ImageProps;
	imgLayoutId?: string;
}

export function Slides(props: IProps) {
	const { imageProps, imgLayoutId } = props;

	const { slides, currentSlide } = useCarouselContext();

	const carouselStyle = useMemo(() => {
		return {
			transition: 'all .5s',
			ml: `-${currentSlide * 100}%`,
		};
	}, [currentSlide]);

	return (
		<Flex
			w="100vw"
			h="100vh"
			display="flex"
			pointerEvents={'none'}
			align="center"
			justify="center"
			pos="fixed"
			top={0}
			left={0}
		>
			<Flex
				// w="70vw"
				w="100%"
				mx="auto"
				// overflow={'hidden'}
				{...carouselStyle}
			>
				<Flex grow={1} pos="relative">
					{slides.map((slide, sid) => {
						let conditionalProps = {};
						const isFirst = sid === 0;
						if (isFirst) {
							conditionalProps = {
								as: motion.div,
								layoutId: imgLayoutId,
								// layout: 'position',
							};
						}
						const isActive = currentSlide === sid;
						return (
							<Image
								key={'slide-' + sid}
								src={slide.img}
								alt="carousel image"
								boxSize="full"
								backgroundSize="cover"
								width={1000}
								height={800}
								layout="fill"
								{...conditionalProps}
								{...imageProps}
								wrapperStyles={{
									// boxSize: 'full',
									flexShrink: 0,
									flexGrow: 1,
									// display: 'flex',
									// alignItems: 'stretch',
									// justifyContent: 'stretch',
									w: '100%',
									minH: '600px',
								}}
								imgStyles={{
									w: '100%',
									h: '100%',
									minH: '500px',
								}}
							/>
						);
					})}
					<SlideDescription
						pos="absolute"
						bottom={'100%'}
						left={'50%'}
						transform={'translateX(-50%)'}
						mx="auto"
						sx={{
							'& *': {
								textAlign: 'center',
							},
						}}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
}

{
	/* <Stack
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
						</Stack> */
}
{
	/* <Stack
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
								</Stack> */
}
// </Box>
