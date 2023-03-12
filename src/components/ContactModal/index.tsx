import {
	Box,
	CloseButton,
	Divider,
	Flex,
	Heading,
	HStack,
	Stack,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { ContactIcons } from 'components/ContactModal/ContactIcons';
import {
	CONFETTI_DARK,
	CONFETTI_LIGHT,
} from 'components/ContactModal/confetti';
import { ContactForm } from './ContactForm';

interface IContactFormProps {
	onClose?: () => void;
	isOpen?: boolean;
}

export const ContactModal: React.FC<IContactFormProps> = ({
	onClose,
	isOpen,
}) => {
	const bgImg = useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK);

	return (
		<AnimatePresence initial>
			{isOpen && (
				<Box
					as={motion.div}
					variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
					initial="hidden"
					animate="visible"
					exit="hidden"
					// transition={{ duration: 0.5 }}
					position="absolute"
					top="0"
					left="0"
					zIndex={10000}
					maxH="100vh"
				>
					<Flex
						bg={'gray.100'}
						_dark={{ bg: 'gray.900' }}
						align="center"
						justify="center"
						css={{
							backgroundImage: bgImg,
							backgroundAttachment: 'fixed',
						}}
						id="contact"
						w="100vw"
						h="100vh"
						display="fixed"
						zIndex={'10001'}
						// top="0"
						// left="0"
					>
						<CloseButton
							position="fixed"
							top="2"
							right="2"
							onClick={onClose}
							// onClick={() => setContactFormIsOpen(false)}
						></CloseButton>
						<Box
							borderRadius="lg"
							m={{ base: 5, md: 16, lg: 10 }}
							p={{ base: 5, lg: 16 }}
						>
							<Box>
								<VStack spacing={{ base: 4 }}>
									<Heading
										fontSize={{
											base: '4xl',
											md: '5xl',
										}}
									>
										Get in Touch
									</Heading>
									<Stack spacing={{ base: 4 }} direction="column">
										<ContactForm />
										<HStack spacing={5} my="2">
											<Divider />
											<Text fontSize="xl">or</Text>
											<Divider />
										</HStack>
										<ContactIcons />
									</Stack>
								</VStack>
							</Box>
						</Box>
					</Flex>
				</Box>
			)}
		</AnimatePresence>
	);
};
