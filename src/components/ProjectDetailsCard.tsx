import { Box, Icon as ChakraIcon, Flex, Heading } from '@chakra-ui/react';
import { Carousel } from 'components/carousel';
import { LinksAndClose } from 'components/projects/links-and-close';
import { Project } from 'config/projects';
import { motion } from 'framer-motion';
import { getLayoutIds } from 'pages/work';

interface IProps {
	onClose: () => void;
	project: Project;
}

export function ProjectDetailsCard(props: IProps) {
	const { project, onClose } = props;
	const { name, description, image, Icon, id, demoUrl, githubUrl } = project;

	const layoutIds = getLayoutIds(id);

	return (
		<Box
			mx={2}
			h="100%"
			minH="60vh"
			w="clamp(330px, 75vw ,1600px)"
			position="fixed"
			zIndex={999999}
			bottom={{ base: 0, md: 'auto' }}
			mb={0}
		>
			<Flex
				gap={2}
				alignItems="center"
				pos="fixed"
				top={2}
				left={'50%'}
				transform={'translateX(-50%)'}
			>
				{Icon && (
					<Box as={motion.div} layoutId={layoutIds.logo}>
						<ChakraIcon as={Icon} me="2" boxSize="8" />
					</Box>
				)}
				<Heading
					fontSize="1.5rem"
					as={motion.div}
					layoutId={layoutIds.title}
					fontWeight="bold"
				>
					{name}
				</Heading>
			</Flex>
			<LinksAndClose
				onClose={onClose}
				githubUrl={githubUrl}
				demoUrl={demoUrl}
			/>
			<Carousel.Wrapper slides={project.carouselSlides || []}>
				<Carousel.Slides imgLayoutId={layoutIds.img} />
				<Box
					as={motion.div}
					variants={{
						hidden: {
							y: '100%',
							x: '-50%',
						},
						visible: {
							y: 0,
							x: '-50%',

							transition: {
								duration: 0.5,
								ease: 'easeInOut',
							},
						},
					}}
					initial="hidden"
					animate="visible"
					exit="hidden"
					pos="fixed"
					bottom={0}
					left={'50%'}
					transform="translateX(-50%)"
				>
					<Carousel.PreviewSlides bgColor="blackAlpha.400" />
				</Box>
			</Carousel.Wrapper>
		</Box>
	);
}
