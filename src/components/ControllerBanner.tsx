import { CloseIcon, InfoIcon } from '@chakra-ui/icons';
import {
	Banner,
	BannerIcon,
	BannerContent,
	BannerTitle,
	BannerDescription,
	BannerActions,
	BannerCloseButton,
	IconButton,
} from '@saas-ui/react';
import { useDisclosure } from '@chakra-ui/react';

interface IProps {
	label: string;
	description: string;
}

export function ControllerBanner(props: IProps) {
	const { label, description } = props;
	const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

	return (
		<Banner
			isOpen={isOpen}
			onClose={onClose}
			motionPreset="slideOutBottom"
			colorScheme="gray"
			status="info"
		>
			{/* <BannerIcon icon={InfoIcon} /> */}
			<BannerContent>
				<BannerTitle>This website uses cookies.</BannerTitle>
				<BannerDescription>Privacy Policy</BannerDescription>
			</BannerContent>
			<BannerCloseButton />
		</Banner>
	);
}
