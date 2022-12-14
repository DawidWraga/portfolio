import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
import {
	Container,
	Stack,
	Flex,
	Box,
	Heading,
	Text,
	Button,
	Image,
	Icon,
	IconButton,
	createIcon,
	IconProps,
	useColorModeValue,
} from '@chakra-ui/react';
import Layout from './Layout';
import FixedComponents from '../components/FixedComponents';
import { AnimatedGrid } from '../components/AnimatedGrid';
import SkillsGrid from '../components/SkillsGrid';
import { motion } from 'framer-motion';
import { FaceIcon } from '../public/images/FaceIcon';

const Home: NextPage = () => {
	return (
		// <Box bg={'gray.800'} w={'full'} h={'100vh'}>
		<div>
			<Head>
				<title>Dawid Wraga</title>
				<meta
					name="description"
					content="Full stack web developer portfolio page"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<LandingPage />
				<Container maxW="container.xl" centerContent>
					<SkillsGrid />
				</Container>
			</Layout>
			<FixedComponents />
		</div>
	);
};

export default Home;

export function LandingPage() {
	return (
		<Container maxW={'container.xl'}>
			<Stack
				align={'center'}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}
				direction={{ base: 'column', md: 'row' }}
				px={2}
			>
				<Stack flex={1} spacing={{ base: 5, md: 10 }}>
					<Heading
						lineHeight={1.1}
						fontWeight={600}
						fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
						position={'relative'}
						display="inline-block"
						width="fit-content"
						_after={{
							content: "''",
							width: '101%',
							height: '20%',
							position: 'absolute',
							bottom: 1,
							left: 0,
							bg: 'red.400',
							zIndex: -1,
						}}
					>
						Dawid Wraga
						<br />
					</Heading>
					<Heading
						color={'red.400'}
						lineHeight={1}
						fontWeight={600}
						fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
					>
						Full Stack <br />
						Web Developer
					</Heading>
					<Text lineHeight={1.1} color={'gray.500'} fontSize={'2xl'}>
						Passionate about creating exceptional user experiences, specializing
						in web technologies
					</Text>
					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={{ base: 'column', sm: 'row' }}
					>
						<Button
							rounded={'full'}
							size={'lg'}
							fontWeight={'700'}
							px={6}
							colorScheme={'red'}
							bg={'red.400'}
							_hover={{
								transform: 'scale(1.02)',
								transition: 'transform 200ms',
							}}
							_active={{ transform: 'scale(1.00)' }}
						>
							View Work
						</Button>
						<Button
							_hover={{
								transform: 'scale(1.02)',
								transition: 'transform 200ms',
							}}
							rounded={'full'}
							size={'lg'}
							fontWeight={'semibold'}
							px={6}
						>
							About me
						</Button>
					</Stack>
				</Stack>
				<Flex
					flex={1}
					justify={'center'}
					align={'center'}
					position={'relative'}
					w={'full'}
				>
					<Blob
						w={'150%'}
						h={'150%'}
						position={'absolute'}
						top={'-20%'}
						left={0}
						zIndex={0}
						color={useColorModeValue('blue.100', 'blue.400')}
					/>
					<FaceIcon
						// alt={'Hero Image'}
						// fit={'cover'}
						// align={'center'}
						w={'100%'}
						h={'300px'}
						zIndex={5}
					/>
				</Flex>
			</Stack>
		</Container>
	);
}

export const Blob = (props: IconProps) => {
	return (
		<Icon
			width={'100%'}
			viewBox="0 0 578 440"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
				fill="currentColor"
			/>
		</Icon>
	);
};
