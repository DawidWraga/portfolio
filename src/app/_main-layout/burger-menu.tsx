import { Box, BoxProps, Button, ButtonProps } from '@chakra-ui/react';
import { useLayoutStore } from 'stores/use-layout-store';

export interface BurgerMenuProps extends ButtonProps {}

export function BurgerMenu(props: BurgerMenuProps) {
	const { ...buttonProps } = props;

	const { toggleSidebar, sidebarIsOpen } = useLayoutStore();

	const h = 4;

	return (
		<Button
			onClick={toggleSidebar}
			// pos="fixed"
			// top={0}
			// right={0}
			pos="relative"
			top={1}
			variant={'unstyled'}
			rounded={'full'}
			// bgColor={sidebarIsOpen ? 'brand.500' : 'transparent'}
			aria-label={'Toggle Sidebar button'}
			transform="rotate(0)"
			transition="all 500ms ease-in-out"
			zIndex={'9999'}
			sx={{
				'& span': {
					bgColor: 'gray.500',
				},
			}}
			{...buttonProps}
			pt={4}
			opacity={0.8}
		>
			<Line top={0} {...(sidebarIsOpen && styles.dissapear)} />
			<Line top={h / 2} {...(sidebarIsOpen && styles.rotateRight)} />
			<Line top={h / 2} {...(sidebarIsOpen && styles.rotateLeft)} />
			<Line top={h} {...(sidebarIsOpen && styles.dissapear)} />
		</Button>
	);
}

function Line(props: BoxProps) {
	return (
		<Box
			as="span"
			w="75%"
			h="4px"
			position="absolute"
			opacity="1"
			left="50%"
			display="block"
			rounded="xl"
			transform="auto"
			rotate="0"
			translateX={'-50%'}
			translateY="5px"
			transition="all 350ms ease-in-out"
			{...props}
		/>
	);
}

const styles = {
	rotateLeft: {
		rotate: '-45deg',
	},
	rotateRight: {
		rotate: '45deg',
	},
	dissapear: {
		top: '1em',
		width: 0,
		left: '50%',
	},
};
