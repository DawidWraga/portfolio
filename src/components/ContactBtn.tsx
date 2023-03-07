import { Button } from '@chakra-ui/react';
import { useModals } from '@saas-ui/react';
interface IContactBtnProps {
	onClick?: () => void;
	[key: string]: any;
}

const ContactBtn: React.FC<IContactBtnProps> = ({ onClick, ...props }) => {
	const modals = useModals();
	return (
		<>
			<Button
				onClick={() => {
					modals.open({
						type: 'contact',
					});
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
