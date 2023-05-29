import {
	ButtonGroup,
	Container,
	Icon,
	IconButton,
	Stack,
	Text,
} from '@chakra/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';

export function Footer() {
	return (
		<Container
			as="footer"
			role="contentinfo"
			py={{ base: '12', md: '16' }}
			maxW="container.xl"
		>
			<Stack spacing={{ base: '4', md: '5' }}>
				<Stack justify="space-between" direction="row" align="center">
					{/* <Logo /> */}
					<div>Dawid.</div>
					<ButtonGroup variant="ghost">
						<IconButton
							as="a"
							href="#"
							aria-label="LinkedIn"
							icon={<FaLinkedin fontSize="1.25rem" />}
						/>
						<IconButton
							as="a"
							href="#"
							aria-label="GitHub"
							icon={<FaGithub fontSize="1.25rem" />}
						/>
						<IconButton
							as="a"
							href="#"
							aria-label="Twitter"
							icon={<FaTwitter fontSize="1.25rem" />}
						/>
					</ButtonGroup>
				</Stack>
				<Text fontSize="sm" color="subtle">
					Made with{' '}
					<Icon as={AiFillHeart} color="red" pos="relative" top={'1px'} /> by
					Dawid Wraga
				</Text>
			</Stack>
		</Container>
	);
}
