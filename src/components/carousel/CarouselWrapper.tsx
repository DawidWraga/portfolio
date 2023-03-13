import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
	CarouselProvider,
	CarouselSlide,
} from 'components/carousel/CarouselContext';

interface IProps {
	children: React.ReactNode;
	slides?: CarouselSlide[];
}

export function CarouselWrapper(props: IProps) {
	const { children, slides = defaultSlides } = props;

	const [currentSlide, setCurrentSlide] = useState(0);

	const slideCount = slides.length;

	const toPrevSlide = () => {
		setCurrentSlide((s) => (s === 0 ? slideCount - 1 : s - 1));
	};
	const toNextSlide = () => {
		setCurrentSlide((s) => (s === slideCount - 1 ? 0 : s + 1));
	};

	const setSlide = (slide: number) => setCurrentSlide(slide);

	return (
		<CarouselProvider
			value={{
				currentSlide,
				setSlide,
				slideCount,
				toPrevSlide,
				toNextSlide,
				slides,
			}}
		>
			<Flex pos="relative" flexDir="column">
				<Flex
					w="100%"
					bg="#edf3f8"
					_dark={{ bg: '#3e3e3e' }}
					// p={10}
					alignItems="center"
					justifyContent="center"
					h="100%"
				></Flex>
			</Flex>

			{children}
		</CarouselProvider>
	);
}

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
