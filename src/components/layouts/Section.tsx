import {
	Box,
	BoxProps,
	Container,
	ContainerProps,
	Flex,
	Heading,
	useColorMode,
} from '@chakra-ui/react';
import { Divider } from '@saas-ui/react';
import { motion } from 'framer-motion';

interface IProps extends ContainerProps {
	children: React.ReactNode;
	title?: string;
	id?: string;
	wrapperProps?: BoxProps;
}

export function Section(props: IProps) {
	const { children, title, id, wrapperProps, ...rest } = props;

	return (
		<Box as="section" w="100%" {...wrapperProps} minH="600px">
			<Container
				maxW="container.xl"
				my={10}
				overflow="hidden"
				id={id ?? `${title?.toLowerCase().replace(' ', '-')}`}
				{...rest}
			>
				{title && (
					<Flex
						alignItems="center"
						gap={3}
						mt={5}
						mb={8}
						justifyContent="flex-start"
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
						>
							{title}
						</Heading>
					</Flex>
				)}
				{children}
			</Container>
		</Box>
	);
}
