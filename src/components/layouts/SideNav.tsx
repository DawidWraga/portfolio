import { useRef } from 'react';
import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	IconButton,
	useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Nav } from '../layouts/Header';
import ContactBtn from '../ContactBtn';

interface ISideNavProps {}

const SideNav: React.FC<ISideNavProps> = ({}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef(null);

	return (
		<Box display={{ base: 'inline-block', md: 'none' }}>
			<IconButton
				size={'md'}
				icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
				aria-label={'Open Menu'}
				display={{ md: 'none' }}
				onClick={isOpen ? onClose : onOpen}
			/>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Menu</DrawerHeader>
					<DrawerBody>
						<Nav>
							<ContactBtn onClick={onClose} />
						</Nav>
					</DrawerBody>
					d
				</DrawerContent>
			</Drawer>
		</Box>
	);
};

export default SideNav;
