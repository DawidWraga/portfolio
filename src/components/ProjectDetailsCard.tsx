import {
	Avatar,
	LinkBox,
	LinkOverlay,
	Text,
	Icon as ChakraIcon,
	Box,
	ModalOverlay,
	CloseButton,
	IconButton,
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
import { Carousel } from 'components/Carousel';
import { Project } from 'config/projects';
import { motion } from 'framer-motion';
import { getLayoutIds } from 'pages/work';
import { FiArrowRight } from 'react-icons/Fi';

interface IProps {
	onClose: () => void;
	project: Project;
}

export function ProjectDetailsCard(props: IProps) {
	const { project, onClose } = props;
	const { name, description, image, Icon, id } = project;

	const layoutIds = getLayoutIds(id);

	return (
		<Card
			as={motion.div}
			layoutId={layoutIds.container}
			// onClick={onClose}
			mx="auto"
			// left="50%"
			// transform="translateX(-50%)"
			minW={['100vw', '90vw', '80vw', '70vw']}
			// h="50vh"
			top={'clamp(20px, 6vh, 150px)'}
			// left={'25vw'}
			position="fixed"
			zIndex={999999}
			// variant="outline"
			// colorScheme="teal"
			variant="filled"
			colorScheme="messenger"
		>
			<CardHeader
				px="auto"
				gap="2"
				display="flex"
				justifyContent={'center'}
				position="relative"
				_hover={{ cursor: 'unset' }}
			>
				<CloseButton
					zIndex={99999}
					position="absolute"
					top={2}
					right={2}
					onClick={onClose}
				/>

				{Icon && (
					<Box as={motion.div} layoutId={layoutIds.logo}>
						<ChakraIcon as={Icon} me="2" boxSize="8" />
					</Box>
				)}
				<LinkOverlay href="#">
					<CardTitle
						fontSize="1.5rem"
						as={motion.div}
						layoutId={layoutIds.title}
						fontWeight="bold"
					>
						{name}
					</CardTitle>
				</LinkOverlay>
			</CardHeader>
			{/* <CardMedia
					height="400px"
					bgImg={image}
					as={motion.div}
					layoutId={layoutIds.img}
				/> */}
			<Carousel
				expandedSlideImageProps={{
					bgSize: 'cover',
					as: motion.div,
				}}
				slides={project?.carouselSlides || []}
			/>
			<CardBody minH="200px">
				<Text fontSize="md" color="muted">
					{description}
				</Text>
				<Text fontSize="md" color="muted">
					{description}
				</Text>
				<Text fontSize="md" color="muted">
					{description}
				</Text>
			</CardBody>
			<CardFooter>
				<Button>View Demo</Button>
				<Button>View Code</Button>
			</CardFooter>
		</Card>
	);
}
