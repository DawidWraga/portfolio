// import { Image, ImageProps } from '@chakra-ui/next-js';
import NextImage, { ImageProps } from 'next/image';
export interface LogoIconProps
	extends Omit<ImageProps, 'alt' | 'src' | 'fill' | 'objectFit'> {}

export function GumboLogo(props: LogoIconProps) {
	const { ...imageProps } = props;

	return (
		<>
			<NextImage
				src={'/projects/gumbo/logo.svg'}
				alt={`Gumbo logo`}
				width={40}
				height={40}
				loading="eager"
				// objectFit="contain"
				{...imageProps}
			/>
		</>
	);
}
