import { Box, BoxProps, ChakraComponent } from '@chakra-ui/react';
import NextImage, { type ImageProps as NextImageProps } from 'next/image';

export interface ImageProps
	extends NextImageProps,
		Omit<BoxProps, keyof NextImageProps | 'sx'> {
	imgStyles?: BoxProps['sx'];
	wrapperStyles?: BoxProps['sx'];
}

export const Image: ChakraComponent<'img', ImageProps> = (
	props: ImageProps
) => {
	const {
		width,
		height,
		src,
		alt,
		quality,
		placeholder,
		blurDataURL,
		loader,
		layout,
		imgStyles,
		wrapperStyles,
		...wrapperProps
	} = props;

	const nextImageProps = {
		width,
		height,
		src,
		alt,
		quality,
		placeholder,
		blurDataURL,
		loader,
		layout,
	};

	return (
		<>
			<Box
				className=".img-wrapper"
				sx={{
					display: 'inline-block',
					overflow: 'hidden',
					position: 'relative',

					'& .img': {
						objectFit: 'contain',
						width: '100%',
						height: 'auto',
						...imgStyles,
					},
					...wrapperStyles,
				}}
				{...wrapperProps}
			>
				<NextImage className="img" {...nextImageProps} />
			</Box>
		</>
	);
};
