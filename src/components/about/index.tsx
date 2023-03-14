import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { Card, CardBody, CardHeader, CardTitle } from '@saas-ui/react';
import { AnimatedLetters } from 'components/AnimatedText';
import { Image } from 'components/Image';
import { Section } from 'components/layouts/Section';
import { SkillsGrid } from 'components/work/SkillsGrid';

interface IProps {}

export function About(props: IProps) {
	const {} = props;

	return (
		<Section
			title="about"
			wrapperProps={{ minH: '800px' }}
			sx={{ '& .section-title-wrapper': { mb: 12 } }}
		>
			<Grid
				gridTemplateColumns={{ base: '100%', lg: '60% 40%' }}
				gridTemplateRows="repeat(3, auto)"
				// gridTemplateRows={{ base: 'auto auto', lg: 'auto' }}
				// gridAutoFlow="row"
				gap={6}
				rowGap={12}
			>
				<GridItem>
					<Card>
						<CardHeader pb={0}>
							<CardTitle>
								<AnimatedLetters mb={0} fontSize="1.2rem" fontWeight={600}>
									Who am I?
								</AnimatedLetters>
							</CardTitle>
						</CardHeader>
						<CardBody display="flex" flexDir="column" gap={6} pt={7} pb={10}>
							<Text>
								I am a software engineer with a passion for building web
								applications.
							</Text>
							<Text>
								My mission is to contribute towards building a better future by
								understanding users, prioritizing their needs, and delivering
								products that solve real world problems.
							</Text>
							<Text>
								I am currently an IT Management for Business student at
								Loughborough Universiy, and I have previously studied psychology
								at the university of York.
							</Text>
							<Text>
								This experience has been invaluable in helping me understand the
								importance of user centered design in building products that
								people love.
							</Text>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem
					order={{ base: -1, lg: 0 }}
					// display="flex" justifyContent="center" alignItems="center"
				>
					<Box
						// h="100%"
						h="350px"
						w="100%"
					>
						<Box position="relative" h="100%" maxW="380px" mx="auto">
							<Image
								src="/images/face-photo.png"
								layout="fill"
								alt="Dawid"
								objectFit={'contain'}
								display="block"
								h="100%"
								w="auto"
							></Image>
						</Box>
					</Box>
				</GridItem>
				<GridItem colSpan={{ base: 1, lg: 2 }} mb="10">
					<SkillsGrid />
				</GridItem>
			</Grid>
		</Section>
	);
}
