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
import { pages } from 'config/pages';
import { LinkButton } from 'components/LinkButton';

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
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 1 },
		},
	},
	children: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
				ease: 'easeInOut',
			},
		},
	},
};
export const Nav: React.FC<INavProps> = ({ children }) => {
	return (
		<Flex
			as={motion.ul}
			gap="5"
			direction={{ base: 'column', md: 'row' }}
			variants={variants.container}
			initial={'hidden'}
			animate="visible"
			alignItems={'center'}
			justifyContent="center"
		>
			{/* <motion.ul> */}
			{pages.map((page) => (
				<Box
					key={page.route}
					as={motion.li}
					variants={variants.children}
					w="full"
					listStyleType={'none'}
					initial="hidden"
					animate="visible"
				>
					<LinkButton linkProps={{ href: page.route || '/' }}>
						{page.label}
					</LinkButton>
				</Box>
			))}
			<ColorModeToggle />
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
						}}
					>
						Dawid.
					</Text>
				</Link>
				<Spacer />
				<Box display={{ base: 'none', md: 'inline-block' }}>
					<Nav />
				</Box>
				<SideNav />

				{/* </Flex> */}
			</Flex>

		</Flex>
	);
};

export default Header;
