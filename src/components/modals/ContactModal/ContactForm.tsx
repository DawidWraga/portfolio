import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

export function ContactForm() {
	const bgGray = useColorModeValue('white', 'gray.700');

	return (
		<Box
			bg={bgGray}
			borderRadius="lg"
			p={8}
			color="gray.700"
			_dark={{ color: 'whiteAlpha.900' }}
			shadow="base"
			w={{ base: 'unset', sm: '400px', md: 'container.sm' }}
		>
			<VStack spacing={5}>
				<FormControl isRequired>
					<FormLabel>Name</FormLabel>
					<InputGroup>
						<InputLeftElement>
							<BsPerson />
						</InputLeftElement>
						<Input type="text" name="name" placeholder="Your Name" />
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Email</FormLabel>
					<InputGroup>
						<InputLeftElement>
							<MdOutlineEmail />
						</InputLeftElement>
						<Input type="email" name="email" placeholder="Your Email" />
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Message</FormLabel>
					<Textarea
						name="message"
						placeholder="Your Message"
						rows={6}
						resize="none"
					/>
				</FormControl>
				<Button
					colorScheme="blue"
					bg="blue.400"
					color="white"
					_hover={{
						bg: 'blue.500',
					}}
					rounded="full"
					w={{ base: 'full', md: 'fit-content' }}
				>
					Send Message
				</Button>
			</VStack>
		</Box>
	);
}
