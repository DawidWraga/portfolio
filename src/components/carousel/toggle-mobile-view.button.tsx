import { useMediaQuery } from '@chakra-ui/react';
import { Button } from '@saas-ui/react';
import { useCarouselContext } from 'components/carousel/CarouselContext';
import { useCarouselStore } from 'stores/use-carousel-store';
import { SlScreenDesktop } from 'react-icons/sl';
import { CiMobile2 } from 'react-icons/ci';

export interface ToggleMobileViewButtonProps {}

export function ToggleMobileViewButton(props: ToggleMobileViewButtonProps) {
	const {} = props;

	const { isMobileView, toggleIsMobileView } = useCarouselStore();

	const [isMobile] = useMediaQuery('(max-width: 600px)', {
		ssr: true,
		fallback: false,
	});

	if (isMobile) return null;
	return (
		<>
			<Button
				onClick={() => {
					toggleIsMobileView();
				}}
				leftIcon={isMobileView ? <SlScreenDesktop /> : <CiMobile2 />}
				mr={4}
			>
				{isMobileView ? 'View Desktop Gallery' : 'View Mobile Gallery'}
			</Button>
		</>
	);
}
