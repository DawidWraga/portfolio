import { Box, Button, Flex, Show, Spacer, Text } from '@chakra-ui/react';
import ColorModeToggle from 'components/buttons/ColorModeToggle';
import SideNav from 'components/layouts/SideNav';
import { NavLinkButton } from 'components/buttons/NavLinkButton';
import { pages } from 'config/pages';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BurgerMenu } from 'components/layouts/burger-menu';

interface IHeaderProps {}

interface INavProps {
	children?: React.ReactNode;
	onClose?: () => void;
}

const variants = {
	container: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.25, delayChildren: 0 },
		},
	},
	children: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			// transition: {
			// 	duration: 1,
			// 	ease: 'easeInOut',
			// },
		},
	},
};
export const Nav: React.FC<INavProps> = ({ children, onClose }) => {
	return (
		<Flex
			as={motion.ul}
			gap={{ base: 10, md: 5 }}
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
					sx={{
						'& *': {
							fontSize: { base: '4xl', md: 'lg' },
						},
					}}
					onClick={onClose}
					// fontSize={{ base: '2xl', md: 'lg' }}
					// initial="hidden"
					// animate="visible"
				>
					<NavLinkButton linkProps={{ href: page.route || '/' }}>
						{page.label}
					</NavLinkButton>
				</Box>
			))}
		</Flex>
	);
};

const Header: React.FC<IHeaderProps> = ({}) => {
	// const scrollDirection = useScrollDirection();

	return (
		<Flex
			// bg={useColorModeValue('rgba(113, 128, 150, .8)', 'rgba(23, 25, 35, .8)')}
			bgColor="rgba(13, 15, 25, .85)"
			_dark={{
				bgColor: 'rgba(23, 25, 35, .8)',
			}}
			justify="center"
			align="center"
			backdropFilter="blur(5px)"
			position="fixed"
			top={0}
			// top={scrollDirection === 'down' ? '-100px' : '0'}
			w="100vw"
			zIndex="99999"
			transition="top 200ms ease-in-out"
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
						color="whiteAlpha.900"
					>
						Dawid.
					</Text>
				</Link>
				<Spacer />
				<Show above="md">
					<Nav />
				</Show>
				<Show below="md">
					<BurgerMenu />

					<SideNav />
				</Show>
			</Flex>
		</Flex>
	);
};

export default Header;
