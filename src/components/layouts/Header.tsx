import { Box, Flex, Show, Spacer, Text } from '@chakra-ui/react';
import { NavLinkButton } from 'components/buttons/NavLinkButton';
import SideNav from 'components/layouts/SideNav';
import { BurgerMenu } from 'components/layouts/burger-menu';
import { pages } from 'config/pages';
import { getStaggerProps } from 'motion/get-stagger-props';
import Link from 'next/link';

interface IHeaderProps {}

interface INavProps {
	children?: React.ReactNode;
	onClose?: () => void;
}

const staggerProps = getStaggerProps({
	staggerChildren: 0.5,
});

export const Nav: React.FC<INavProps> = ({ children, onClose }) => {
	return (
		<Flex
			gap={{ base: 10, md: 5 }}
			direction={{ base: 'column', md: 'row' }}
			{...staggerProps.container}
			alignItems={'center'}
			justifyContent="center"
		>
			{pages.map((page) => (
				<Box
					key={page.route}
					{...staggerProps.children}
					w="full"
					sx={{
						'& *': {
							fontSize: { base: '4xl', md: 'lg' },
						},
					}}
					onClick={onClose}
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
			bgColor="rgba(13, 13, 24, .85)"
			// _dark={{
			// 	bgColor: 'rgba(23, 25, 35, .8)',
			// }}
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
