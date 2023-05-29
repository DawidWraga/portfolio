import { ChevronRightIcon } from '@chakra/icons';
import {
	Box,
	BoxProps,
	Container,
	ContainerProps,
	Flex,
	Heading,
	HeadingProps,
	useColorMode,
} from '@chakra/react';
import { Divider } from '@saas/react';
import { LinkButton } from 'components/buttons/link-button';
import { NavLinkButton } from 'components/buttons/NavLinkButton';
import { motion } from 'framer-motion';
import { useActiveSectionStore } from 'stores/useActiveSectionStore';

interface IProps extends ContainerProps {
	children: React.ReactNode;
	title?: string;
	id?: string;
	wrapperProps?: BoxProps;
	headingProps?: HeadingProps;
	viewMoreUrl?: string;
}

export function Section(props: IProps) {
	const {
		children,
		title,
		id,
		wrapperProps,
		headingProps,
		viewMoreUrl,
		...rest
	} = props;

	const { addActiveSection, removeActiveSection } = useActiveSectionStore();

	const sectionId = id ?? title?.toLowerCase().replace(' ', '-') ?? '';

	return (
		<Box
			as={motion.section}
			w="100%"
			minH="750px"
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
				<Flex justify="space-between" align={'center'}>
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
					{viewMoreUrl && (
						<NavLinkButton
							linkProps={{
								href: viewMoreUrl,
							}}
							disableUnderlineSection
							icon={ChevronRightIcon}
						>
							View more
						</NavLinkButton>
					)}
				</Flex>
				<Flex
					h="100%"
					flexDir="column"
					// alignItems="center"
					justifyContent={'center'}
					flex={1}
					w="100%"
				>
					{children}
				</Flex>
			</Container>
		</Box>
	);
}
