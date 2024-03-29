import {
	Button,
	ButtonProps,
	Flex,
	IconButton,
	useColorMode,
} from '@chakra/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

export default function ColorModeToggle(props: ButtonProps) {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		/**
		 * Ideally, only the button component should be used (without Flex).
		 * Props compatible with <Button /> are supported.
		 */
		<Flex
			justifyContent="center"
			alignItems="center"
			position="fixed"
			bottom={5}
			left={5}
			zIndex={'overlay'}
		>
			<IconButton
				icon={
					colorMode === 'light' ? (
						<BsMoonStarsFill color="#333" />
					) : (
						<BsSun opacity={0.8} />
					)
				}
				aria-label="Toggle Color Mode"
				onClick={toggleColorMode}
				_focus={{ boxShadow: 'none' }}
				w="fit-content"
				variant="link"
				{...props}
			/>
		</Flex>
	);
}
