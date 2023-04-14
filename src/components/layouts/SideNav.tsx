import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useLayoutStore } from 'stores/use-layout-store';
import { Nav } from '../layouts/Header';

interface ISideNavProps {}

const SideNav: React.FC<ISideNavProps> = ({}) => {
	// const { isOpen, onOpen, onClose } = useDisclosure();

	const { toggleSidebar, sidebarIsOpen, closeSidebar } = useLayoutStore();
	const btnRef = useRef(null);

	return (
		<>
			<Drawer
				isOpen={sidebarIsOpen}
				placement="right"
				onClose={closeSidebar}
				finalFocusRef={btnRef}
				size={'full'}
			>
				<DrawerOverlay />
				<DrawerContent
					sx={{
						top: '160px',
						pos: 'relative',
						h: 'calc(100vh - 50px)',
						mt: 'auto',
						bgColor: 'rgba(45 55 72 / 0.93)',
						backdropFilter: 'blur(10px)',
					}}
				>
					{/* <DrawerCloseButton /> */}
					{/* <DrawerHeader>Menu</DrawerHeader> */}
					<DrawerBody
						display="flex"
						w="100%"
						h="100%"
						pos="relative"
						bottom="30px"
						sx={{
							'& a': {
								fontSize: '5xl',
							},
						}}
					>
						<Nav onClose={closeSidebar} />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default SideNav;
