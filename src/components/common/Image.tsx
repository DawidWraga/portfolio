import { Box, BoxProps, ChakraComponent } from '@chakra/react';
import NextImage, { type ImageProps as NextImageProps } from 'next/image';
import React from 'react';

export interface ImageProps
	extends NextImageProps,
		Omit<BoxProps, keyof NextImageProps | 'sx'> {
	imgStyles?: BoxProps['sx'];
	wrapperStyles?: BoxProps['sx'];
	otherWrapperProps?: any;
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
		otherWrapperProps,
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
			{/* @ts.ignore */}
			{/* 
			
			//@ts-ignore*/}
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
