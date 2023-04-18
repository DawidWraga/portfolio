import { Button, ButtonProps } from '@chakra-ui/react';
import { BsFillPlayCircleFill } from 'react-icons/bs';

export interface PlayVideoButtonProps extends ButtonProps {}

export function PlayVideoButton(props: PlayVideoButtonProps) {
	const { children, ...buttonProps } = props;

	return (
		<>
			<Button leftIcon={<BsFillPlayCircleFill />} {...buttonProps}>
				{children ?? 'Play'}
			</Button>
		</>
	);
}
