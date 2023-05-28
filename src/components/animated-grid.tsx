import styled from '@emotion/styled';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useLayoutEffect, useRef } from 'react';

interface IAnimatedGridProps {
	Items: JSX.Element[];
	[key: string]: any;
}

export const AnimatedGrid: React.FC<IAnimatedGridProps> = ({
	delayPerPixel = 0.001,
	numItems = 10,
	Items,
}) => {
	const originOffset = useRef({ top: 0, left: 0 });
	const controls = useAnimation();

	const grid = useRef(null);
	// const isInView = useInView(grid);

	// useEffect(() => {
	// 	controls.start('visible');
	// }, []);

	return (
		// We set variants to be an object to force variant propagation - this is a bug
		// with variants and useAnimation()
		// https://github.com/framer/motion/issues/191
		<motion.div
			initial="hidden"
			animate={controls}
			variants={{}}
			onViewportEnter={() => controls.start('visible')}
			onViewportLeave={() => controls.start('hidden')}
			ref={grid}
		>
			{Items.map((Item, i) => (
				<GridItem
					key={i}
					i={i}
					originIndex={26}
					delayPerPixel={delayPerPixel}
					originOffset={originOffset}
					Item={Item}
				/>
			))}
		</motion.div>
	);
};

export const GridItem: React.FC<any> = ({
	delayPerPixel,
	i,
	originIndex,
	originOffset,
	Item,
}) => {
	const delayRef = useRef(0);
	const offset = useRef({ top: 0, left: 0 });
	const ref = useRef(null);

	// The measurement for all elements happens in the layoutEffect cycle
	// This ensures that when we calculate distance in the effect cycle
	// all elements have already been measured
	useLayoutEffect(() => {
		const element: any = ref.current;
		if (!element) return;

		offset.current = {
			top: element.offsetTop,
			left: element.offsetLeft,
		};

		if (i === originIndex) {
			originOffset.current = offset.current;
		}
	}, [delayPerPixel]);

	useEffect(() => {
		const dx = Math.abs(offset.current.left - originOffset.current.left);
		const dy = Math.abs(offset.current.top - originOffset.current.top);
		const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
		delayRef.current = d * delayPerPixel;
	}, [delayPerPixel]);

	return (
		<Box ref={ref} variants={itemVariants} custom={delayRef}>
			{Item}
		</Box>
	);
};

const itemVariants = {
	hidden: {
		opacity: 0,
		scale: 0.5,
	},
	visible: (delayRef: any) => {
		console.log(delayRef.current - 1);
		return {
			opacity: 1,
			scale: 1,
			transition: { delay: delayRef.current - 1 },
		};
	},
};

const Box = styled(motion.div)`
	margin: 10px;
	display: inline-block;
	height: 65px;
	width: 65px;
	// background-color: white;
	border-radius: 10px;
`;
