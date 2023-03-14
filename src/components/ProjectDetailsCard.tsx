import {
	Box,
	CloseButton, Flex,
	Icon as ChakraIcon
} from '@chakra-ui/react';
import {
	Card,
	CardBody, CardHeader, CardTitle
} from '@saas-ui/react';
import { Carousel } from 'components/carousel';
import { LinkButton } from 'components/LinkButton';
import { Project } from 'config/projects';
import { motion } from 'framer-motion';
import { getLayoutIds } from 'pages/work';
import { BsDisplay } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si';

interface IProps {
	onClose: () => void;
	project: Project;
}

export function ProjectDetailsCard(props: IProps) {
	const { project, onClose } = props;
	const { name, description, image, Icon, id, demoUrl, githubUrl } = project;

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
			boxShadow="0 7px 12px #2a69ac"
		>
			<CardHeader
				// px="auto"
				_hover={{ cursor: 'unset' }}
				position="relative"
				// display="flex"
				// justifyContent={'space-between'}
				// w="100% !important"
				// sx={{
				// 	'& > div': {
				// 		w: 'calc(100% - 15px)',
				// 		display: 'flex',
				// 		justifyContent: 'space-between',
				// 	},
				// }}
			>
				<CloseButton
					zIndex={99999}
					position="absolute"
					top={2}
					right={2}
					onClick={onClose}
				/>

				<Flex gap="2" alignItems="center" w="100%">
					{Icon && (
						<Box as={motion.div} layoutId={layoutIds.logo}>
							<ChakraIcon as={Icon} me="2" boxSize="8" />
						</Box>
					)}
					{/* <LinkOverlay href="#"> */}
					<CardTitle
						fontSize="1.5rem"
						as={motion.div}
						layoutId={layoutIds.title}
						fontWeight="bold"
					>
						{name}
					</CardTitle>
					{/* <Divider /> */}
					<LinkButton
						href={githubUrl ?? ''}
						aria-label="view github"
						leftIcon={<SiGithub />}
						ml={'auto'}
						target="_blank"
					>
						View code
					</LinkButton>
					<LinkButton
						href={demoUrl ?? ''}
						aria-label="view github"
						leftIcon={<BsDisplay />}
						ml={2}
						mr={6}
						target="_blank"
					>
						View live
					</LinkButton>
				</Flex>

				{/* <Box>
					<CardHeaderAction pos="relative" ml="auto">
					</CardHeaderAction>
				</Box> */}

				{/* </LinkOverlay> */}
			</CardHeader>

			<Carousel.Wrapper slides={project.carouselSlides || []}>
				<Carousel.Slides />
				<CardBody bgColor={'whiteAlpha.200'}>
					<Carousel.SlideDescription />
				</CardBody>
				<Carousel.PreviewSlides bgColor="blackAlpha.200" />
			</Carousel.Wrapper>
			{/* <CardFooter>
				<Button>View Demo</Button>
				<Button>View Code</Button>
			</CardFooter> */}
		</Card>
	);
}
