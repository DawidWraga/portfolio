import { IconButton } from '@chakra-ui/react';
import { useCarouselContext } from 'components/carousel/CarouselContext';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

interface IProps {}

export function ChangeSlideArrows(props: IProps) {
	return (
		<>
			<ChangeSlideArrow direction="prev" />
			<ChangeSlideArrow direction="next" />
		</>
	);
}

interface IChangeSlideArrowProps {
	direction: 'prev' | 'next';
}

export function ChangeSlideArrow(props: IChangeSlideArrowProps) {
	const { direction } = props;

	const { toPrevSlide, toNextSlide } = useCarouselContext();

	return (
		<IconButton
			icon={direction === 'prev' ? <BiLeftArrowAlt /> : <BiRightArrowAlt />}
			// right="0"
			{...(direction === 'prev' ? { left: '0' } : { right: '0' })}
			onClick={direction === 'prev' ? toPrevSlide : toNextSlide}
			aria-label={`go to ${direction === 'prev' ? 'previous' : 'next'} slide`}
			{...arrowStyles}
		/>
	);
}

const arrowStyles = {
	cursor: 'pointer',
	pos: 'fixed',
	top: '50vh',
	// transform: 'translateY(-50%)',
	mt: '-22px',
	// bg: 'red',
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
	zIndex: 1,
	// mx: 2,
	colorScheme: 'blackAlpha',
	userSelect: 'none',
} as const;
