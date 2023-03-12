import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { Divider } from '@saas-ui/react';
import { motion } from 'framer-motion';

interface IProps {
	children: React.ReactNode;
	title: string;
}

export default function Section(props: IProps) {
	const { children, title } = props;

	return (
		<Container maxW="container.xl">
			<Flex alignItems="center" gap={3} mt={5} mb={8}>
				<Box h="0.48rem" w="5rem" bg="red.400" />
				<Heading
					textTransform={'uppercase'}
					size="md"
					color="whiteAlpha.900"
					fontWeight={300}
				>
					{title}
				</Heading>
				{/* <Divider /> */}
				{/* <Box as={motion.span} h=".2rem" w="100%" bgColor="whiteAlpha.400" /> */}
			</Flex>
			{children}
		</Container>
	);
}
