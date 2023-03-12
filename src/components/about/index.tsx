import { Box, Grid, Text } from '@chakra-ui/react';
import { Card, CardBody, CardHeader, CardTitle } from '@saas-ui/react';
import { AnimatedLetters } from 'components/AnimatedText';
import Section from 'components/layouts/Section';
import { SkillsGrid } from 'components/work/SkillsGrid';

interface IProps {}

export function About(props: IProps) {
	const {} = props;

	return (
		<Section title="about">
			{/* <Grid gridTemplateColumns={'60% 40%'}> */}
			<Card mx="auto" maxW="650px">
				<CardHeader pb={0}>
					<CardTitle>
						<AnimatedLetters mb={0} fontSize="1.2rem" fontWeight={600}>
							Who am I?
						</AnimatedLetters>
					</CardTitle>
				</CardHeader>
				<CardBody display="flex" flexDir="column" gap={2}>
					<Text>
						I am a software engineer with a passion for building web
						applications
					</Text>
					<Text>
						My mission is to contribute towards building a better future by
						prioritising user needes and creating products that are easy to use
						and solve real world problems.
					</Text>
					<Text>
						I am currently an IT Management for Business student at Loughborough
						Universiy, and I have previoulsy studied psychology at the
						university of York.
					</Text>
					<Text>
						This experinece has been invaluable in helping me understand the
						importance of user centered design the importance of empathy in
						building products that people love.
					</Text>
				</CardBody>
			</Card>
			<SkillsGrid />
			{/* </Grid> */}
		</Section>
	);
}
