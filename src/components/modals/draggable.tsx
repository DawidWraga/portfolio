import { MotionProps } from 'framer-motion';
import { breakpoints } from 'utils/breakpoints';
import { Box } from '@chakra-ui/react';

export const getResponsiveModalContentProps = (onSwipeDown: () => void) => {
	const isMobile = breakpoints.md('below');
	return isMobile ? getMobileProps(onSwipeDown) : desktopProps;
};

const desktopProps = {
	overflowX: 'hidden',
	minHeight: '500px',
	borderBottomRadius: 'md',
	borderTopRadius: 'md',
	overflowY: 'auto',
} as const;

const getMobileProps = (onSwipeDown: () => void) =>
	({
		overflowX: 'hidden',
		minHeight: '75vh',
		borderBottomRadius: '0',
		borderTopRadius: 'xl',
		overflowY: 'hidden',
		motionProps: slideFromScreenBottom(onSwipeDown),
	} as const);

// animate slide up from bottom for mobile devices
const slideFromScreenBottom = (onSwipeDown: () => void): MotionProps => ({
	initial: { translateY: '90vh' },
	animate: {
		translateY: '20vh',
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
	exit: {
		translateY: '100vh',
		transition: { duration: 0.2, ease: 'easeInOut' },
	},
	drag: 'y',
	dragConstraints: { top: 0, bottom: 0 },
	onDragEnd: (e, { offset, velocity }) => {
		const swipe = swipePower(offset.y, velocity.y);
		if (swipe > 130 * 1000) {
			onSwipeDown();
		}
	},
	dragElastic: { top: 0, bottom: 1 },
});

// helper function to calculate the swipe power required to close the modal
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

// horizontal line to indicate that the modal is draggable
export const DraggableIndicator = () => {
	return (
		<Box
			opacity={{ base: 1, md: 0 }}
			bgColor="white"
			w="2.4rem"
			h="3px"
			rounded="xl"
			position="absolute"
			top="2"
			left="calc(50% - 1rem)"
			mb="10"
		/>
	);
};
