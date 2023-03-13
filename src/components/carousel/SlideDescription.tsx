import { Box, BoxProps, Heading, Text } from '@chakra-ui/react';
import { useCarouselContext } from 'components/carousel/CarouselContext';

interface IProps extends BoxProps {}

export function SlideDescription(props: IProps) {
	const { ...rest } = props;

	const { slides, currentSlide } = useCarouselContext();

	const slide = slides[currentSlide];

	return (
		<Box {...rest}>
			<Heading>{slide?.label}</Heading>
			<Text>{slide?.description}</Text>
		</Box>
	);
}
