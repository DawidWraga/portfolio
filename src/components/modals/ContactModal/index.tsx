import {
	Box,
	Divider,
	Flex,
	Heading,
	HStack,
	ModalBody,
	Stack,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import { ContactIcons } from 'components/modals/ContactModal/ContactIcons';
import {
	CONFETTI_DARK,
	CONFETTI_LIGHT,
} from 'components/modals/ContactModal/confetti';
import { ContactForm } from 'components/modals/ContactModal/ContactForm';
import { BaseModal, BaseModalProps } from 'components/modals/BaseModal';
import { AnimatePresence, motion } from 'framer-motion';

interface IContactFormProps extends BaseModalProps {}

export function ContactModal(props: IContactFormProps) {
	const { children, ...rest } = props;

	return (
		<BaseModal
			size="full"
			isCentered
			isResponsive={false}
			scrollBehavior="inside"
			modalContentProps={{
				motionProps: {
					variants: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
					initial: 'hidden',
					animate: 'visible',
					exit: 'hidden',
				},
			}}
			{...rest}
		>
			<ContactModalContent isOpen={rest.isOpen} />
		</BaseModal>
	);
}

export function ContactModalContent(props: { isOpen: boolean }) {
	const { isOpen } = props;
	const bgImg = useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK);

	return (
		<ModalBody
			bg={'gray.100'}
			_dark={{ bg: 'gray.900' }}
			// align="center"
			// justify="center"
			justifyContent="center"
			alignItems="center"
			display="flex"
			css={{
				backgroundImage: bgImg,
				backgroundAttachment: 'fixed',
			}}
			id="contact"
			w="100%"
			h="100vh"
		>
			<Box
				borderRadius="lg"
				m={{ base: 5, md: 16, lg: 10 }}
				p={{ base: 5, lg: 16 }}
			>
				<Box>
					<VStack spacing={{ base: 4 }}>
						{isOpen && (
							<Heading as={motion.span} layoutId="CONTACT-BTN">
								Lets collaborate!
							</Heading>
						)}
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
		</ModalBody>
	);
}
