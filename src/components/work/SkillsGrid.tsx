import {
	Box,
	Circle,
	Divider,
	Flex,
	Grid,
	GridItem,
	Heading,
	Icon,
	IconButton,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { coreTechnologies, technologies } from 'config/SkillsData';
import { Card, CardHeader, CardTitle, CardBody, Button } from '@saas-ui/react';
import { AnimatedLetters } from 'components/AnimatedText';
import { SkillItem } from 'components/about/SkillItem';
import { BiChevronDown } from 'react-icons/bi';
import flattenDeep from 'lodash.flattendeep';

interface ISkillsGridProps {}

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

const containerProps = {
	initial: 'initial',
	whileInView: 'animate',
	as: motion.ul,
	variants: variants.container,
};

const childProps = {
	variants: variants.children,
	as: motion.li,
	listStyleType: 'none',
};

export const SkillsGrid: React.FC<ISkillsGridProps> = () => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Card>
			<CardHeader
				pb={0}
				position="relative"
				minH={{ base: isOpen ? '100px' : '160px', lg: '100px' }}
			>
				<CardTitle
					position="absolute"
					left={isOpen ? { base: 4, lg: '50%' } : 4}
					transform="auto"
					translateX={isOpen ? { base: 0, lg: '-50%' } : 0}
					top={4}
					transition="all 350ms ease-in-out"
				>
					<AnimatedLetters
						mb={0}
						fontSize={isOpen ? '1.8rem' : '1.4rem'}
						transition="font-size 300ms ease-in-out"
						fontWeight={600}
					>
						Technical skills
					</AnimatedLetters>
				</CardTitle>
				<Flex
					gap={2}
					{...containerProps}
					flex={1}
					position="absolute"
					left={'50%'}
					top={{ base: 'calc(50% + 1rem)', lg: '50%' }}
					transform="auto"
					translateX="-50%"
					translateY="-25%"
					w="90%"
					justifyContent={'center'}
					overflow={
						isOpen
							? { base: 'hidden', lg: 'unset' }
							: { base: 'auto', lg: 'unset' }
					}
				>
					{coreTechnologies.map((tech) => {
						return (
							<Box key={tech.link} {...childProps} w="100px">
								<SkillItem {...tech} />
							</Box>
						);
					})}
				</Flex>
				<Button
					colorScheme={'red'}
					position="absolute"
					right={4}
					top={4}
					sx={{
						'& .chakra-button__icon': {
							ml: { base: 0, lg: '8px' },
						},
					}}
					rounded={{ base: 'full', lg: 'md' }}
					rightIcon={
						<Icon
							as={BiChevronDown}
							transform="auto"
							rotate={isOpen ? '-180' : '0'}
							transition="all 300ms ease-in-out"
							fontSize="1.2rem"

							// display="flex"
							// alignItems="center"
						/>
					}
					onClick={onToggle}
					textTransform="uppercase"
				>
					<Box as="span" display={{ base: 'none', lg: 'inline-block' }}>
						view {isOpen ? 'less' : 'more'}
					</Box>
				</Button>
			</CardHeader>
			<CardBody>
				<AnimatePresence>
					{isOpen && (
						<Box
							as={motion.div}
							initial={{ height: 0 }}
							animate={{ height: 'auto' }}
							exit={{ height: 0 }}
							overflow="hidden"
						>
							{Object.entries(technologies).map(([category, skills]) => {
								return (
									<Box my="2" key={category}>
										<Flex alignItems="center" w="100%" gap={2} my={2}>
											<Heading
												size="sm"
												textTransform={'capitalize'}
												whiteSpace="nowrap"
											>
												{category}
											</Heading>
											<Divider />
										</Flex>
										<Grid
											templateColumns={'repeat(auto-fit, 100px)'}
											justifyContent={'center'}
											mb={5}
											gap={2}
											{...containerProps}
										>
											{skills.map((skill) => {
												return (
													<GridItem key={skill.link} {...childProps}>
														<SkillItem {...skill} />
													</GridItem>
												);
											})}
										</Grid>
									</Box>
								);
							})}
						</Box>
					)}
				</AnimatePresence>
			</CardBody>
		</Card>
	);
};
