import { PlayVideoButton } from 'components/buttons/play-video-button';
import { useCarouselContext } from 'components/carousel/CarouselContext';

export interface PlayCarouselVideoButtonProps {}

export function PlayCarouselVideoButton(props: PlayCarouselVideoButtonProps) {
	const {} = props;

	const { slides, currentSlide, setVideoIsPlaying, videoIsPlaying } =
		useCarouselContext();

	const hasVideo = slides[currentSlide]?.hasVideo ?? false;
	if (!hasVideo) return null;

	return (
		<>
			<PlayVideoButton
				pos="absolute"
				bottom={4}
				zIndex={9999999}
				opacity={videoIsPlaying ? 0 : 1}
				transition={'all 0.5s ease-in-out'}
				colorScheme="brand"
				left="50%"
				transform="translateX(-50%)"
				onClick={() => {
					if (videoIsPlaying) return;
					if (!hasVideo) return;

					setVideoIsPlaying(true);
				}}
			>
				Watch Current Slide
			</PlayVideoButton>
		</>
	);
}
