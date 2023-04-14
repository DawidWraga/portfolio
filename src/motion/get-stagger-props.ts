import { motion } from 'framer-motion';

interface GetStaggerPropsOptions {
	staggerChildren?: number;
	delayChildren?: number;
	staggerDirection?: number;
	childElementType?: string;
	containerElementType?: string;
}

export function getStaggerProps(options: GetStaggerPropsOptions = {}) {
	const {
		staggerChildren = 0.25,
		delayChildren = 0,
		staggerDirection = 1,
		containerElementType = 'ul',
		childElementType = 'li',
		// ...props
	} = options;

	const variants = {
		container: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: { staggerChildren, delayChildren, staggerDirection },
			},
		},
		children: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				// transition: {
				// 	duration: 1,
				// 	ease: 'easeInOut',
				// },
			},
		},
	};

	return {
		container: {
			initial: 'hidden',
			animate: 'visible',
			variants: variants.container,
			// @ts-ignore
			as: motion[containerElementType],
		},
		children: {
			variants: variants.children,
			// @ts-ignore
			as: motion[childElementType],
		},
	};
}
