import {
	Flex,
	Icon,
	LinkBox,
	LinkOverlay,
	SimpleGrid,
	Text,
} from '@chakra/react';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@saas/react';
import { Project } from 'config/projects';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export interface ProjectCardProps {
	project: Project;
}

export function ProjectCard(props: ProjectCardProps) {
	const { project: p } = props;

	return (
		<>
			<Link href={`/work/${p.id}`}>
				<Card
					width="100%"
					h="100%"
					isHoverable
					variant="outline"
					transition="all 0.3s ease-in-out"
					pos="relative"
					_hover={{
						boxShadow: '0 10px 15px 4px rgba(66 153 225 / 40%)',
						transform: 'translateY(-5px)',
					}}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}
				>
					<CardHeader alignItems={'center'}>
						{p.Icon && (
							<SimpleGrid
								placeContent={'center'}
								mr={{ base: 2, md: 3 }}
								display="flex"
							>
								<p.Icon />
							</SimpleGrid>
						)}
						<Flex flexDir="column">
							<CardTitle sx={{ fontSize: 'xl', textTransform: 'capitalize' }}>
								{p.name}
							</CardTitle>
							<Text color="gray.400">{p?.role ?? ''}</Text>
						</Flex>
					</CardHeader>
					<CardBody>
						<Text fontSize="md" color="muted">
							{p.description}
						</Text>
					</CardBody>
					<CardFooter sx={{ mt: 'auto' }}>
						<Button
							rightIcon={
								<Icon
									as={FiArrowRight}
									transform="translateX(-5px)"
									transitionProperty="common"
									transitionDuration="normal"
									sx={{ '.saas-card:hover &': { transform: 'translateX(0)' } }}
								/>
							}
							variant="link"
							sx={{ '.saas-card:hover &': { color: 'rgb(66 153 225)' } }}
						>
							Learn more
						</Button>
					</CardFooter>
				</Card>
			</Link>
		</>
	);
}
