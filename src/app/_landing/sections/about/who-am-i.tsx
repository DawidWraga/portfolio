import { Grid, GridItem, Text } from '@chakra/react';
import { Card, CardBody, CardHeader, CardTitle } from '@saas/react';
import { AnimatedLetters } from 'components/animated-text';
import { Image } from 'components/common/Image';
import { Section } from 'components/layouts/Section';
import Milestones from 'app/_landing/sections/about/milestones';
import { SkillsGrid } from 'app/_landing/sections/work/SkillsGrid';

export interface WhoAmIProps {}

export function WhoAmI(props: WhoAmIProps) {
	const {} = props;

	return (
		<>
			{' '}
			<Card h="100%">
				<CardHeader pb={0}>
					<CardTitle>
						<AnimatedLetters mb={0} fontSize="1.2rem" fontWeight={600}>
							Who am I?
						</AnimatedLetters>
					</CardTitle>
				</CardHeader>
				<CardBody display="flex" flexDir="column" gap={6} pt={7} pb={10}>
					<Text>
						I am a practical and postive software developer with a passion for
						web development.
					</Text>
					<Text>
						I'm highly open, deeply curious, and perpetually driven to learn and
						improve.
					</Text>

					<Text>
						I am strong proponent for TECH FOR GOOD - deliberately applying
						technology with the aim of minimising human suffering and maximising
						the flourishing of all people, beyond only the shareholders.
					</Text>
					<Text fontWeight={600}>
						It is my mission to contribute towards humanity through creating
						technology that improves the lives of others, one line of code at a
						time.
					</Text>
					<Text>
						I am pursuing this mission every single day by developing my skills
						and working on meaningful projects that I believe can make a impact
						on others lives.
					</Text>
					<Text>
						Please contact me if you would like to work together on a project
						that can make a positive impact on the world.
					</Text>
				</CardBody>
			</Card>
		</>
	);
}
