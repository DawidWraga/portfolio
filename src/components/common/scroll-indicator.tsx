'use client';
import { Box } from '@chakra/react';
import { motion, useScroll } from 'framer-motion';

export interface ScrollIndicatorProps {}

export function ScrollIndicator(props: ScrollIndicatorProps) {
	const {} = props;

	const { scrollYProgress } = useScroll();

	return (
		<Box
			as={motion.div}
			style={{ scaleX: scrollYProgress }}
			bgColor="red.400"
			height="5px"
			pos="fixed"
			maxH="3px"
			top={'44px'}
			left={0}
			right={0}
			zIndex={10000000}
			transformOrigin="0%"
		/>
	);
}
