import { Grid, GridItem, Text } from '@chakra-ui/react';
import { Card, CardBody, CardHeader, CardTitle } from '@saas-ui/react';
import { AnimatedLetters } from 'components/animated-text';
import { Image } from 'components/common/Image';
import { Section } from 'components/layouts/Section';
import Milestones from 'app/_landing/sections/about/milestones';
import { SkillsGrid } from 'app/_landing/sections/work/SkillsGrid';
import { WhoAmI } from 'app/_landing/sections/about/who-am-i';

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
				gridTemplateColumns={{ base: '100%', lg: '50% 50%' }}
				gridTemplateRows="repeat(2, auto)"
				// gridTemplateRows={{ base: 'auto auto', lg: 'auto' }}
				// gridAutoFlow="row"
				alignItems={'stretch'}
				justifyContent={'stretch'}
				gap={5}
				rowGap={12}
			>
				<GridItem>
					<WhoAmI />
				</GridItem>
				<GridItem
					// order={{ base: 1, lg: 0 }}
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Milestones />
				</GridItem>
				<GridItem colSpan={{ base: 1, lg: 2 }} mb="10">
					<SkillsGrid />
				</GridItem>
			</Grid>
		</Section>
	);
}
