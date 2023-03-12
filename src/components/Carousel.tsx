import React, { useState } from 'react';
import {
	Box,
	Flex,
	HStack,
	Icon,
	IconButton,
	IconButtonProps,
	ImageProps,
	Stack,
	StyleProps,
	Text,
	TextProps,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { getLayoutIds } from 'pages/work';
import { CardMedia } from '@saas-ui/react';
import { Image } from 'components/Image';
import { ControllerBanner } from 'components/ControllerBanner';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

export type CarouselSlide = {
	img: string;
	label: string;
	description: string;
};

interface IProps {
	slides?: CarouselSlide[];
	expandedSlideImageProps?: ImageProps;
}

export function Carousel(props: IProps) {
	const { expandedSlideImageProps, slides = defaultSlides } = props;

	const [currentSlide, setCurrentSlide] = useState(0);

	const slidesCount = slides.length;

	const prevSlide = () => {
		setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
	};
	const nextSlide = () => {
		setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
	};

	const carouselStyle = {
		transition: 'all .5s',
		ml: `-${currentSlide * 100}%`,
	};

	return (
		<Flex pos="relative" flexDir="column">
			<Flex
				w="100%"
				bg="#edf3f8"
				_dark={{ bg: '#3e3e3e' }}
				// p={10}
				alignItems="center"
				justifyContent="center"
				h="100%"
			>
				<Flex w="100%" pos="relative" overflow="hidden">
					<Text color="white" fontSize="xs" p="8px 12px" pos="absolute" top="0">
						{currentSlide + 1} / {slidesCount}
					</Text>
					<Flex h="clamp(400px, 50vh, 1500px)" w="full" {...carouselStyle}>
						<ExpandedSlides
							slides={slides}
							expandedSlideImageProps={expandedSlideImageProps}
							currentSlide={currentSlide}
						/>
					</Flex>
					<IconButton
						icon={<BiLeftArrowAlt fontSize="50px" />}
						{...arrowStyles}
						left="0"
						onClick={prevSlide}
						aria-label="previous slide"
					/>
					<IconButton
						icon={<BiRightArrowAlt fontSize="50px" />}
						right="0"
						onClick={nextSlide}
						{...arrowStyles}
					/>
				</Flex>
			</Flex>
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
				<PreviewSlides slides={slides} {...{ currentSlide, setCurrentSlide }} />
			</HStack>
		</Flex>
	);
}

interface IExpandedSlidesProps {
	slides: CarouselSlide[];
	expandedSlideImageProps?: ImageProps;
	currentSlide: number;
}

function ExpandedSlides({
	slides,
	expandedSlideImageProps,
	currentSlide,
}: IExpandedSlidesProps) {
	return (
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
							{...expandedSlideImageProps}
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
						<Stack
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
						</Stack>
					</Box>
				);
			})}
		</>
	);
}

interface IPreviewSlidesProps {
	slides: CarouselSlide[];
	previewSlideImageProps?: any;
	currentSlide: number;
	setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

function PreviewSlides({
	slides,
	currentSlide,
	setCurrentSlide,
	previewSlideImageProps,
}: IPreviewSlidesProps) {
	return (
		<>
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
						onClick={() => setCurrentSlide(sid)}
						pos="relative"
					>
						<Image
							src={slide.img}
							alt="carousel image"
							// boxSize="full"
							// backgroundSize="cover"
							{...previewSlideImageProps}
							layout="fill"
						/>
					</Box>
				);
			})}
		</>
	);
}

const arrowStyles: IconButtonProps = {
	cursor: 'pointer',
	pos: 'absolute',
	top: '50%',
	// w: 'auto',
	mt: '-22px',
	p: '16px',
	color: 'white',
	fontWeight: 'bold',
	fontSize: '18px',
	transition: '0.6s ease',
	borderRadius: '0 3px 3px 0',
	rounded: 'full',
	w: 'clamp(20px, 5vw, 50px)',
	h: 'clamp(20px, 5vw, 50px)',
	textAlign: 'center',
	mx: 2,
	colorScheme: 'blackAlpha',
	userSelect: 'none',
	// _hover: {
	// 	// opacity: 0.5,
	// 	// bg: 'black',
	// 	bgColor: 'blackAlpha.500',
	// },
	'aria-label': 'change slide',
} as const;

const defaultSlides = [
	{
		img: 'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		label: 'First Slide',
		description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
	},
	{
		img: 'https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		label: 'Second Slide',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		img: 'https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
		label: 'Third Slide',
		description:
			'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
	},
	{
		img: 'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		label: 'Fourth Slide',
		description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
	},
	{
		img: 'https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		label: 'Fifth Slide',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
];
