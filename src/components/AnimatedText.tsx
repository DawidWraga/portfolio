import { useMemo } from 'react';

import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { Box, Text, TextProps } from '@chakra-ui/react';

interface IAnimatedTextProps extends TextProps {
	variants?: textVariantTypes | Variants;
	children: string;
}

export const AnimatedText = ({
	variants,
	children,
	...rest
}: IAnimatedTextProps) => {
	// Split the text into words and add a space after each word.
	const words = children.split(' ').map((word) => `${word}\u00A0`);

	const renderWords = useMemo(
		() =>
			words.map((word, index) => (
				<Box as="span" key={index} display="inline-block" overflow={'hidden'}>
					<Box
						as={motion.span}
						variants={getTextVariant(variants)}
						initial="hidden"
						animate="visible"
						display="inline-block"
					>
						{word}
					</Box>
				</Box>
			)),
		[variants, words]
	);

	return (
		<Text {...rest}>
			<motion.span variants={getTextVariant(variants)}>
				{renderWords}
			</motion.span>
		</Text>
	);
};

export interface AnimatedLettersProps extends TextProps {
	children: string;
	textVariants?: textVariantTypes | Variants;
	letterVariants?: letterVariantTypes | Variants;
}

export const AnimatedLetters = ({
	children,
	textVariants,
	letterVariants,
	...rest
}: AnimatedLettersProps) => {
	// Split the text into words and add a space after each word.
	const words: string[] = children.split(' ').map((word) => `${word}\u00A0`);
	return (
		<Text {...rest}>
			<Box
				as={motion.span}
				variants={getTextVariant(textVariants)}
				initial="hidden"
				animate="visible"
				pos="relative"
				h="calc(100% + 1rem)"
			>
				{words.map((word, index) => (
					<Box
						as="span"
						key={'LETTER' + word + index}
						display="inline-block"
						whiteSpace="nowrap"
					>
						{[...word].flat().map((letter, letterIndex) => (
							<Box
								as="span"
								key={letterIndex}
								display="inline-block"
								overflow="hidden"
								h="calc(100% + 1rem)"
								pb={1}
							>
								<Box
									as={motion.span}
									variants={getLetterVariant(letterVariants)}
									display="inline-block"
									pos="relative"
									h="calc(100% + 1rem)"
								>
									{letter}
								</Box>
							</Box>
						))}
					</Box>
				))}
			</Box>
		</Text>
	);
};

export const textVariants = {
	default: {
		visible: {},
	},
	staggered: {
		hidden: { transition: { staggerChildren: 0.015 } },
		visible: { transition: { staggerChildren: 0.015 } },
	},
} as const;

export const letterVariants = {
	default: {
		hidden: { opacity: 0, top: 50 },
		visible: {
			opacity: 1,
			top: 0,
			transition: { ease: 'circOut', duration: 0.5 },
		},
	},
	increased: {
		hidden: { opacity: 0, top: 75 },
		visible: {
			opacity: 1,
			top: 0,
			transition: {
				ease: [0.455, 0.03, 0.515, 0.955],
				duration: 0.5,
			},
		},
	},
} as const;

type textVariantTypes = keyof typeof textVariants;
type letterVariantTypes = keyof typeof letterVariants;

const getLetterVariant = (
	type: letterVariantTypes | Variants | undefined = 'default'
) => (typeof type === 'string' ? letterVariants[type] : type);
const getTextVariant = (
	type: textVariantTypes | Variants | undefined = 'default'
) => (typeof type === 'string' ? textVariants[type] : type);
