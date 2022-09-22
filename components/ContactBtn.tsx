import { Button, useDisclosure } from '@chakra-ui/react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';
import { useGlobalContext } from '../contexts/GlobalContext';
import { ContactForm } from './ContactForm';
interface IContactBtnProps {
	onClick?: () => void;
	[key: string]: any;
}

const ContactBtn: React.FC<IContactBtnProps> = ({ onClick, ...props }) => {
	// const { isOpen, onOpen, onClose } = useDisclosure();
	const { setContactFormIsOpen } = useGlobalContext();
	return (
		<>
			<Button
				onClick={() => {
					setContactFormIsOpen(true);
					if (onClick) onClick();
				}}
				variant={'outline'}
				rounded={'full'}
				w={{ base: '100%', md: 'unset' }}
				_hover={{ bg: 'blue.400', color: 'white' }}
				color="blue.400"
				borderColor="blue.400"
				{...props}
			>
				contact
			</Button>
		</>
	);
};

export default ContactBtn;
