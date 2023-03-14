import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ProjectCard } from 'components/projectCard';
import { Image } from 'components/Image';
import { projects } from 'config/projects';
import { ProjectDetailsCard } from 'components/ProjectDetailsCard';
import { Section } from 'components/layouts/Section';

interface IProps {}

export function ProjectsList(props: IProps) {
	const {} = props;

	const [selectedId, setSelectedId] = useState<string | null>(null);

	const onClose = () => setSelectedId(null);

	const selected = projects.find((project) => project.id === selectedId);

	return (
		<Section
			title="projects"
			wrapperProps={{ bgColor: 'shade.200', _dark: { bgColor: 'shade.400' } }}
		>
			<SimpleGrid
				mt={10}
				mb={10}
				columns={{ base: 1, lg: 3 }}
				gap="2"
				justifyContent={'center'}
			>
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						setSelectedId={setSelectedId}
						project={project}
					/>
				))}
			</SimpleGrid>

			<AnimatePresence>
				{selectedId && (
					<ProjectDetailsCard project={selected!} onClose={onClose} />
				)}
			</AnimatePresence>

			{/* overlay */}
			<Box
				bgColor={'blackAlpha.500'}
				w="100vw"
				h="100vh"
				position={'fixed'}
				left={0}
				top={0}
				zIndex={9999}
				onClick={onClose}
				_hover={{ cursor: 'pointer' }}
				opacity={selectedId ? 0.8 : 0}
				pointerEvents={selectedId ? 'unset' : 'none'}
				transition={'opacity 0.3s ease-in-out'}
			/>
		</Section>
	);
}

export const getLayoutIds = (id: string) => ({
	container: `project-container-${id}`,
	logo: `project-logo-${id}`,
	title: `project-title-${id}`,
	img: `project-img-${id}`,
});
