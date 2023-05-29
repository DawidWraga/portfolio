import {
	Button,
	Container,
	Heading,
	Icon,
	IconProps,
	Stack,
	Text,
} from '@chakra/react';
import { AnimatedLetters } from 'components/animated-text';
import { Image } from 'components/common/Image';
import { motion } from 'framer-motion';

export function Hero() {
	return (
		<Container maxW={'container.xl'} minH="clamp(400px, 80vh, 1200px)">
			<Stack
				align={'center'}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}
				direction={{ base: 'column', md: 'row' }}
				px={2}
			>
				<Stack flex={1} spacing={{ base: 10, md: 10 }}>
					<Text
						as={motion.h2}
						initial={{
							opacity: 0,
							top: 50,
						}}
						animate={{
							opacity: 1,
							top: 0,
							transition: { delay: 0.2, duration: 0.5, ease: 'circOut' },
						}}
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
					</Text>
					<AnimatedLetters
						as={Heading}
						color={'red.400'}
						// lineHeight={1}
						fontWeight={600}
						// fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
						textVariants="staggered"
						letterVariants="increased"
					>
						Full Stack Web Developer
					</AnimatedLetters>
					<AnimatedLetters
						lineHeight={1.1}
						color={'gray.600'}
						_dark={{
							color: 'gray.200',
						}}
						fontSize={'2xl'}
						letterVariants="increased"
						textVariants="staggered"
						fontWeight={300}
					>
						Entrepreneurial engineer on a mission to uplift humanity through
						technology.
					</AnimatedLetters>
					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={{ base: 'column', sm: 'row' }}
						as={motion.div}
					>
						<Button
							initial={{
								opacity: 0,
								top: 50,
							}}
							animate={{
								opacity: 1,
								top: 0,
								transition: {
									duration: 0.3,
									ease: 'circOut',
									delay: 2,
								},
							}}
							as={motion.a}
							rounded={'full'}
							size={'lg'}
							fontWeight={'600'}
							px={6}
							colorScheme={'red'}
							bg={'red.400'}
							href={'/#work'}
						>
							View Projects
						</Button>
						<Button
							initial={{
								opacity: 0,
								top: 50,
							}}
							animate={{
								opacity: 1,
								top: 0,
								transition: {
									duration: 0.3,
									ease: 'circOut',
									delay: 2.3,
								},
							}}
							as={motion.a}
							rounded={'full'}
							size={'lg'}
							fontWeight={'400'}
							px={6}
							href="#about"
						>
							About me
						</Button>
					</Stack>
				</Stack>
				<Image
					as={motion.div}
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							delay: 2.6,
							duration: 1,
						},
					}}
					priority
					loading="eager"
					src="/images/face-photo.png"
					width={400}
					height={400}
					alt="Dawid"
					objectFit={'contain'}
					wrapperStyles={{
						pos: 'relative',
						h: '100%',
						mx: 'auto',
						display: 'flex',
						maxW: '400px',
						// flex: 1,
					}}
				/>
				{/* <Flex
					flex={1}
					justify={'center'}
					align={'center'}
					position={'relative'}
					w={'full'}
				>
					<Blob
						w={{ base: '110%', xs: '110%', md: '153%' }}
						h={{ base: '125%', md: '150%' }}
						position={'absolute'}
						top={{ base: '-5%', sm: '-10%', md: '-15%', lg: '-20%' }}
						// left={{ sm: -150 }}
						zIndex={0}
						color={useColorModeValue('blue.100', 'blue.400')}
					/>
					<FaceIcon
						// alt={'Hero Image'}
						// fit={'cover'}
						// align={'center'}
						w={'100%'}
						h={{ base: '250px', md: '270px', lg: '300px' }}
						zIndex={5}
					/>
				</Flex> */}
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
