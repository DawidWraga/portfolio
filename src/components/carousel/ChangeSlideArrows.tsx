import { IconButton } from '@chakra/react';
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
			data-arrow
			icon={direction === 'prev' ? <BiLeftArrowAlt /> : <BiRightArrowAlt />}
			// right="0"
			{...(direction === 'prev' ? { left: '0px' } : { right: '0px' })}
			onClick={direction === 'prev' ? toPrevSlide : toNextSlide}
			aria-label={`go to ${direction === 'prev' ? 'previous' : 'next'} slide`}
			{...arrowStyles}
		/>
	);
}

const arrowStyles = {
	display: { base: 'none', md: 'block' },
	cursor: 'pointer',
	pos: 'absolute',
	top: '50%',
	zIndex: 9999999,
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
	// zIndex: 1,
	mx: 2,
	colorScheme: 'blackAlpha',
	userSelect: 'none',
} as const;
