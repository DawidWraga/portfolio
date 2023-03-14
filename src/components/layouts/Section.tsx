import {
	Box,
	BoxProps,
	Container,
	ContainerProps,
	Flex,
	Heading,
	HeadingProps,
	useColorMode,
} from '@chakra-ui/react';
import { Divider } from '@saas-ui/react';
import { motion } from 'framer-motion';
import { useActiveSectionStore } from 'stores/useActiveSectionStore';

interface IProps extends ContainerProps {
	children: React.ReactNode;
	title?: string;
	id?: string;
	wrapperProps?: BoxProps;
	headingProps?: HeadingProps;
}

export function Section(props: IProps) {
	const { children, title, id, wrapperProps, headingProps, ...rest } = props;

	const { addActiveSection, removeActiveSection } = useActiveSectionStore();

	const sectionId = id ?? title?.toLowerCase().replace(' ', '-') ?? '';

	return (
		<Box
			as={motion.section}
			w="100%"
			minH="700px"
			onViewportEnter={() => {
				addActiveSection(sectionId);
			}}
			onViewportLeave={() => {
				removeActiveSection(sectionId);
			}}
			{...wrapperProps}
		>
			<Container
				maxW="container.xl"
				my={10}
				overflow="hidden"
				id={sectionId}
				{...rest}
				display="flex"
				flexDir="column"
			>
				{title && (
					<Flex
						alignItems="center"
						gap={3}
						mt={10}
						mb={13}
						justifyContent="flex-start"
						className="section-title-wrapper"
					>
						<Box h="0.48rem" w="5rem" bg="red.400" />
						<Heading
							textTransform={'uppercase'}
							size="md"
							color={'blackAlpha.900'}
							_dark={{
								color: 'whiteAlpha.900',
							}}
							fontWeight={300}
							{...headingProps}
						>
							{title}
						</Heading>
					</Flex>
				)}
				<Flex
					h="100%"
					flexDir="column"
					// alignItems="center"
					justifyContent={'center'}
					flex={1}
				>
					{children}
				</Flex>
			</Container>
		</Box>
	);
}
