import { IconButton, type IconButtonProps } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { BsArrowLeftShort } from 'react-icons/bs';

interface IProps extends Omit<IconButtonProps, 'aria-label'> {
	'aria-label'?: string;
}

export function BackButton(props: IProps) {
	const { ...rest } = props;

	const router = useRouter();

	return (
		<IconButton
			aria-label="go back"
			onClick={() => router.back()}
			variant="ghost"
			rounded="full"
			icon={<BsArrowLeftShort fontSize="1.3rem" />}
			{...rest}
		/>
	);
}
