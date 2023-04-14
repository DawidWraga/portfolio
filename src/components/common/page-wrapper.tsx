import { Box, Flex, Text, type BoxProps } from '@chakra-ui/react';
import { ErrorBoundary } from '@saas-ui/react';
import { BackButton } from 'components/buttons/back-button';
import { EmptyState } from 'components/common/empty-state';

//  TODO: add a loading state
//  TODO: add Head meta data
//  TODO: add sidebar as possible solution to shared layouts?

/**
 * Wrapper component that provides a consistent layout for each page.
 */
export function PageWrapper(props: PageWrapperProps) {
	const {
		children,
		title,
		toolbar,
		errorComponent = (
			<EmptyState title="Thank you for your patience while we fix this small bug." />
		),
		hasBackButton = false,
		headerContainerProps,
		isLoading,
		waitForHydration = false,
	} = props;

	return (
		<ErrorBoundary errorComponent={errorComponent}>
			<Box
				mt={'50px'}
				h="80px"
				p={2}
				mx={2}
				// borderBottom="1px solid"
				// borderBottomColor="gray.300"
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				as="header"
				{...headerContainerProps}
			>
				<Flex align="center" gap={2}>
					{hasBackButton && <BackButton />}
					<Text
						as="h2"
						fontSize="xl"
						fontWeight={600}
						color="text.primary"
						textTransform="capitalize"
					>
						{title}
					</Text>
				</Flex>
				{toolbar && <Flex>{toolbar}</Flex>}
			</Box>
			<Flex
				direction="column"
				p={3}
				grow={1}
				overflowY="auto"
				mx={2}
				sx={{ '& > *:first-of-type': { h: '100%' } }}
			>
				{children}
			</Flex>
		</ErrorBoundary>
	);
}

export interface PageWrapperProps {
	/**
	 * The title of the page
	 */
	title: React.ReactNode;

	/**
	 * Main body content of the page
	 */
	children: React.ReactNode;

	/**
	 * The toolbar is a flexbox that is placed on the right side of the header
	 */
	toolbar?: React.ReactNode;

	/**
	 * The error component to be rendered when an error occurs in the children
	 */
	errorComponent?: React.ReactNode;

	/**
	 * If true, the page will replace main body content with loading animation
	 */
	isLoading?: boolean;

	/**
	 * If true, the page will wait for hydration before rendering
	 * @default false
	 */
	waitForHydration?: boolean;

	/**
	 * If true, the page will render a back button on the left side of the header
	 */
	hasBackButton?: boolean;

	/**
	 * Props to be passed to the header container
	 */
	headerContainerProps?: BoxProps;
}
