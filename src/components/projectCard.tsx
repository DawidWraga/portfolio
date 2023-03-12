import {
	Avatar,
	LinkBox,
	LinkOverlay,
	Text,
	Icon as ChakraIcon,
	Box,
} from '@chakra-ui/react';
import {
	Card,
	CardContainer,
	CardHeader,
	CardTitle,
	CardMedia,
	CardBody,
	CardFooter,
	Button,
	useModals,
} from '@saas-ui/react';
import { Project } from 'config/projects';
import { motion } from 'framer-motion';
import { getLayoutIds } from 'pages/work';
import { FiArrowRight } from 'react-icons/Fi';

interface IProps {
	project: Project;
	setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
}

export function ProjectCard(props: IProps) {
	const { project, setSelectedId } = props;
	const { name, description, image, Icon, id } = project;

	const layoutIds = getLayoutIds(id);

	return (
		<Box as={motion.div} layoutId={layoutIds.container}>
			<Card
				as={LinkBox}
				width="100%"
				isHoverable
				// variant="outline"
				onClick={() => {
					setSelectedId(id);
				}}
				colorScheme="messenger"
				alignItems="center"
			>
				<CardHeader px="auto" gap="2">
					{Icon && (
						<Box as={motion.div} layoutId={layoutIds.logo}>
							<ChakraIcon
								as={Icon}
								// fontSize="1.6rem"
								me="2"
								boxSize="8"
							/>
						</Box>
					)}
					<LinkOverlay href="#">
						<CardTitle
							fontSize="1.5rem"
							as={motion.div}
							layoutId={layoutIds.title}
						>
							{name}
						</CardTitle>
					</LinkOverlay>
				</CardHeader>
				<CardMedia
					height="400px"
					bgImg={image}
					as={motion.div}
					layoutId={layoutIds.img}
				/>
				<CardBody>
					<Text fontSize="md" color="muted">
						{description}
					</Text>
				</CardBody>
				<CardFooter>
					<Button
						rightIcon={
							<ChakraIcon
								as={FiArrowRight}
								transform="translateX(-5px)"
								transitionProperty="common"
								transitionDuration="normal"
								sx={{ '.saas-card:hover &': { transform: 'translateX(0)' } }}
							/>
						}
						variant="link"
						sx={{ '.saas-card:hover &': { color: 'teal.400' } }}
					>
						Learn more
					</Button>
				</CardFooter>
			</Card>
		</Box>
	);
}
