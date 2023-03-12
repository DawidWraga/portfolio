import {
	Box,
	Button,
	Flex,
	Spacer,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import ColorModeToggle from 'components/ColorModeToggle';
import Link from 'next/link';
import SideNav from 'components/layouts/SideNav';
import ContactBtn from 'components/ContactBtn';
import { motion } from 'framer-motion';

interface IHeaderProps {}

interface INavItemProps {
	label: string;
	route: string;
}
export const NavItem: React.FC<INavItemProps> = ({ label, route }) => {
	return (
		<Link href={route || '/'}>
			<Button variant="ghost" rounded={'full'} w="full">
				{label}
			</Button>
		</Link>
	);
};

interface INavProps {
	children?: React.ReactNode;
}

const variants = {
	container: {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: { staggerChildren: 0.2 },
		},
	},
	children: {
		initial: { opacity: 0, width: '20' },
		animate: { opacity: 1, width: '100' },
	},
};
export const Nav: React.FC<INavProps> = ({ children }) => {
	const pages = [
		{ label: 'about', route: '/about' },
		{ label: 'work', route: '/work' },
		{ label: 'work2', route: '/work2' },
		{ label: 'work3', route: '/work3' },
		{ label: 'blog', route: '/blog' },
	];

	return (
		<Flex
			as={motion.ul}
			gap="4"
			direction={{ base: 'column', md: 'row' }}
			variants={variants.container}
			initial={'initial'}
			animate="animate"
		>
			{/* <motion.ul> */}
			{pages.map((page) => (
				<Box
					as={motion.li}
					variants={variants.children}
					key={page.route}
					w="full"
					listStyleType={'none'}
				>
					<NavItem {...page}></NavItem>
				</Box>
			))}
			<Box
				as={motion.li}
				variants={variants.children}
				style={{
					listStyle: 'None',
					width: '100',
				}}
				// _first={{ width: '100' }}
			>
				{children}
			</Box>
			{/* </motion.ul> */}
		</Flex>
	);
};

const Header: React.FC<IHeaderProps> = ({}) => {
	return (
		<Flex
			bg={useColorModeValue('rgba(113, 128, 150, .8)', 'rgba(23, 25, 35, .8)')}
			justify="center"
			align="center"
			backdropBlur={'15px'}
		>
			<Flex as="nav" py="2" px={'4'} w="container.xl" align={'center'}>
				<Link href="/">
					<Text
						fontWeight={'bold'}
						fontSize="xl"
						transition="transform 200ms"
						_hover={{
							cursor: 'pointer',
							transform: 'scale(1.05)',
						}}
					>
						Dawid.
					</Text>
				</Link>
				<Spacer />
				<Box display={{ base: 'none', md: 'inline-block' }}>
					<Nav>
						<ContactBtn />
					</Nav>
				</Box>
				<ColorModeToggle />
				<SideNav />

				{/* </Flex> */}
			</Flex>
			{/* <Container maxW="6xl" centerContent>
				<Flex w="full" h="14" alignItems={'center'} justify={'space-between'}>
					<Text>Logo</Text>
					<Flex justify={'space-between'} alignItems="center" minW="300px">
						<Text>work</Text>
						<Text>blog </Text>
						<Text>contact</Text>
						<ColorModeToggle />
					</Flex>
				</Flex>
			</Container> */}
		</Flex>
	);
};

export default Header;
