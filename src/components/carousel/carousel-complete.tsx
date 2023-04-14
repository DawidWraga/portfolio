import { Box, Icon as ChakraIcon, Flex, Heading } from '@chakra-ui/react';
import { Carousel, CarouselSlide } from 'components/carousel';
import { LinksAndClose } from 'components/projects/links-and-close';
import { Project } from 'config/projects';
import { motion } from 'framer-motion';
import { getLayoutIds } from 'pages/work';

export interface CarouselCompleteProps {
	slides?: CarouselSlide[];
}

export function CarouselComplete(props: CarouselCompleteProps) {
	const { slides } = props;

	return (
		<>
			<Carousel.Wrapper slides={slides || []}>
				<Flex bgColor="blackAlpha.300" rounded="xl" flexDir="column">
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
