import {
	Box,
	Icon as ChakraIcon,
	Flex,
	GridItem,
	Heading,
	Text,
} from '@chakra-ui/react';
import { Card, CardBody, CardHeader, CardTitle } from '@saas-ui/react';
import { Image } from 'components/common/Image';
import { Project } from 'config/projects';
import { motion } from 'framer-motion';
import { getLayoutIds } from 'pages/work';
interface IProps {
	project: Project;
	setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
}

export function ProjectCard(props: IProps) {
	const { project, setSelectedId } = props;
	const { name, description, image, Icon, id, wideCard } = project;

	const layoutIds = getLayoutIds(id);

	return (
		<GridItem
			as={motion.div}
			layoutId={layoutIds.container}
			colSpan={{ base: 1, lg: wideCard ? 2 : 1 }}
			bgColor="shade.600"
			rounded="lg"
			_hover={{
				cursor: 'pointer',
				boxShadow: '0 10px 15px #2a69ac',
			}}
			transition="box-shadow 300ms ease-in-out"
			display="flex"
			flexDir="column"
			onClick={() => {
				setSelectedId(id);
			}}
		>
			<Flex p={4} align="center">
				{Icon && (
					<Box as={motion.div} layoutId={layoutIds.logo} mr={2}>
						<Icon />
					</Box>
				)}
				<Heading fontSize="1.5rem" as={motion.div} layoutId={layoutIds.title}>
					{name}
				</Heading>
			</Flex>
			<Image
				src={image}
				width={1000}
				height={550}
				as={motion.div}
				layoutId={layoutIds.img}

				imgStyles={{
					w: 'auto',
					h: '100%',
				}}
			/>
		</GridItem>
	);
}
