import { Box, Circle, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { AnimatedGrid } from '../AnimatedGrid';
import { technologies } from './SkillsData';

interface ISkillsGridProps {}

const SkillsGrid: React.FC<ISkillsGridProps> = () => {
	const variants = {
		container: {
			initial: { opacity: 0 },
			animate: {
				opacity: 1,
				transition: { staggerChildren: 0.1 },
			},
		},
		children: {
			initial: { opacity: 0, scale: 0.5 },
			animate: { opacity: 1, scale: 1 },
		},
	};

	const controls = useAnimation();
	return (
		<Box px="20">
			<Heading size="lg">Tools and technologies</Heading>
			{Object.entries(technologies).map(([type, arr]) => {
				return (
					<Box my="10" key={type} maxW={{ base: '300px', md: '500px' }}>
						<Heading size="md" mb="4">
							{type}
						</Heading>
						<motion.ul
							style={{
								display: 'flex',
								flexDirection: 'row',
								flexWrap: 'wrap',
								gap: '18px',
							}}
							variants={variants.container}
							initial="initial"
							animate={controls}
							onViewportEnter={() => controls.start('animate')}
							onViewportLeave={() => controls.start('initial')}
							// onClick={() => controls.start('initial')}
						>
							{arr.map(({ name, link, icon }) => {
								const Icon = icon.bind(null, { style: { fontSize: '3rem' } });
								return (
									<motion.li
										variants={variants.children}
										key={link}
										style={{
											listStyle: 'None',
										}}
									>
										<Flex
											as="a"
											// href={link}
											direction="column"
											align="center"
											justify="center"
											transition="200ms"
											_hover={{ cursor: 'pointer', transform: 'scale(1.08)' }}
										>
											<Circle>
												<Icon w="50px" h="50px" />
											</Circle>
											<Text>{name}</Text>
										</Flex>
									</motion.li>
								);
							})}
						</motion.ul>
					</Box>
				);
			})}
		</Box>
	);
};

export default SkillsGrid;
