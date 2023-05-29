import { Box, Flex } from '@chakra/react';
import { Carousel } from 'components/carousel';
import { SlideLabel } from 'components/carousel/slide-label';
import { ProjectCarouselData } from 'config/projects';
import { motion } from 'framer-motion';

export interface CarouselCompleteProps {
	slides?: ProjectCarouselData[];
}

export function CarouselComplete(props: CarouselCompleteProps) {
	const { slides } = props;

	return (
		<>
			<Carousel.Wrapper slides={slides || []}>
				<Flex
					bgColor="blackAlpha.300"
					rounded="xl"
					flexDir="column"
					pos="relative"
					overflow="hidden"
				>
					{/* <Show above="md"> */}
					<SlideLabel />
					{/* </Show> */}

					<Carousel.Slides />
					<Box
						as={motion.div}
						variants={{
							hidden: {
								y: '100%',
								x: '-50%',
							},
							visible: {
								y: 0,
								x: '-50%',

								transition: {
									duration: 0.5,
									ease: 'easeInOut',
								},
							},
						}}
					>
						<Carousel.PreviewSlides />
					</Box>
				</Flex>
			</Carousel.Wrapper>
		</>
	);
}
