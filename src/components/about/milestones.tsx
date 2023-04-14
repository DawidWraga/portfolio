import {
	VStack,
	Heading,
	Box,
	Link,
	Container,
	BoxProps,
	Circle,
	Flex,
	useColorModeValue,
	Text,
} from '@chakra-ui/react';
import { Card, CardHeader, CardTitle } from '@saas-ui/react';
import { AnimatedLetters } from 'components/AnimatedText';
import { getStaggerProps } from 'motion/get-stagger-props';
import {
	FaBook,
	FaBrain,
	FaBriefcase,
	FaCode,
	FaDigitalTachograph,
	FaHome,
	FaTools,
} from 'react-icons/fa';
// Here we have used react-icons package for the icons
import {
	FiPackage,
	FiHome,
	FiBarChart2,
	FiCheckCircle,
	FiBarChart,
} from 'react-icons/fi';

const staggerProps = getStaggerProps();

const Milestones = () => {
	return (
		<Card pr={9}>
			<CardHeader>
				<AnimatedLetters mb={0} fontSize="1.2rem" fontWeight={600}>
					My journey
				</AnimatedLetters>{' '}
			</CardHeader>
			<VStack textAlign="start" align="start" mb={5}>
				<Box zIndex={5} {...staggerProps.container}>
					{milestones.map((milestone, index) => (
						<MilestoneItem
							key={index}
							skipTrail={index === milestones.length - 1}
							icon={milestone.icon}
						>
							{milestone.text}
						</MilestoneItem>
					))}
				</Box>
			</VStack>
		</Card>
	);
};

// const milestones = [
// 	'Moved out of home at 16, facing mental challenges and financial difficulties.',
// 	'Therapy, philosophy and psychology books helped me go from Cs to A*s in my A-levels.',
// 	'Studied psychology for a year at the University of York, graduating with a 1st class honours.',
// 	'Discovered my love for programming, changed to study computer science & business management at Loughborough University.',
// 	'Finished first year with 1st class honors, including 100 in my web development module, and achieving a junior software developer role at Axalt.',
// 	'Started new position as Lead Front-end Engineer at Gumbo.',
// ];

const milestones = [
	{
		icon: FaHome,
		text: 'Moved out of home at 16, facing mental challenges and financial difficulties.',
	},
	{
		icon: FaBook,
		text: 'Therapy, philosophy and psychology books helped me go from Cs to A*s in my A-levels.',
	},
	{
		icon: FaBrain,
		text: 'Studied psychology for a year at the University of York, graduating with a 1st class honours.',
	},
	{
		icon: FaCode,
		text: 'Discovered my love for programming, changed to study computer science & business management at Loughborough University.',
	},
	{
		icon: FaBriefcase,
		text: 'Finished first year with 1st class honors, including 100 in my web development module, and achieving a junior software developer role at Axalt.',
	},
	{
		icon: FiBarChart,
		text: 'Started new position as Lead Front-end Engineer at Gumbo.',
	},
];

interface MilestoneItemProps extends BoxProps {
	icon?: any;
	boxProps?: BoxProps;
	skipTrail?: boolean;
}

const MilestoneItem: React.FC<MilestoneItemProps> = ({
	icon = FiCheckCircle,
	boxProps = {},
	skipTrail = false,
	children,
	...props
}) => {
	const color = useColorModeValue('gray.700', 'gray.500');
	return (
		<Flex
			{...staggerProps.children}
			minH={20}
			align="center"
			gap={4}
			{...props}
		>
			<Flex flexDir="column" alignItems="center" ml={4} pos="relative">
				<Circle
					size={12}
					bg={useColorModeValue('gray.600', 'gray.500')}
					opacity={useColorModeValue(0.07, 0.15)}
				/>
				<Box
					as={icon}
					size="1.25rem"
					color={color}
					pos="absolute"
					left="0.875rem"
					top="0.875rem"
				/>
				{!skipTrail && <Box w="1px" flex={1} bg={color} my={1} />}
			</Flex>
			<Box flex={1} {...boxProps}>
				{children}
			</Box>
		</Flex>
	);
};

export default Milestones;
