import { Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import { Section } from 'components/layouts/Section';
import { ProjectCard } from 'components/projects/project-card';
import { projects } from 'config/projects';

export interface ProjectCardListProps {}

export function ProjectCardList(props: ProjectCardListProps) {
	const {} = props;

	return (
		<>
			<Section
				title="Work"
				wrapperProps={{ bgColor: 'shade.200', _dark: { bgColor: 'shade.400' } }}
			>
				<SimpleGrid
					columns={{ base: 1, md: 2 }}
					justifyContent={'stretch'}
					alignItems={'stretch'}
					mx="auto"
					w="100%"
					h="100%"
					gap={5}
					my={12}
				>
					{projects.map((p) => (
						<GridItem>
							<ProjectCard key={'project-card-' + p.id} project={p} />
						</GridItem>
					))}
				</SimpleGrid>
			</Section>
		</>
	);
}
