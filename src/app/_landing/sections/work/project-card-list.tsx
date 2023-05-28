import { Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import { Section } from 'components/layouts/Section';
import { ProjectCard } from 'app/_landing/sections/work/project-card';
import { projects } from 'config/projects';
import { getStaggerProps } from 'motion/get-stagger-props';

export interface ProjectCardListProps {}

const staggeredProps = getStaggerProps();

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
					{...staggeredProps.container}
				>
					{projects.map((p) => (
						<GridItem key={'project-card-' + p.id} {...staggeredProps.children}>
							<ProjectCard project={p} />
						</GridItem>
					))}
				</SimpleGrid>
			</Section>
		</>
	);
}
