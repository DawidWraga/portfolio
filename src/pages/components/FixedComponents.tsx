import { Box } from '@chakra-ui/react';
import { ContactForm } from './ContactForm';

interface IFixedComponentsProps {}

const FixedComponents: React.FC<IFixedComponentsProps> = ({}) => {
	return (
		<Box position="fixed" top="0" left="0" zIndex="overlay">
			<ContactForm />
		</Box>
	);
};

export default FixedComponents;
