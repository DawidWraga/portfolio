import { Button, ButtonProps, type ChakraComponent } from '@chakra-ui/react';
import { BsFillPlayCircleFill } from 'react-icons/bs';

export interface PlayVideoButtonProps extends ButtonProps {}

export const PlayVideoButton: ChakraComponent<
	'button',
	PlayVideoButtonProps
> = (props: PlayVideoButtonProps) => {
	const { children, ...buttonProps } = props;

	return (
		<>
			<Button leftIcon={<BsFillPlayCircleFill />} {...buttonProps}>
				{children ?? 'Play'}
			</Button>
		</>
	);
};
