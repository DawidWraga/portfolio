import { Box, CloseButton, Flex, Icon as ChakraIcon } from '@chakra-ui/react';
import { Card, CardBody, CardHeader, CardTitle } from '@saas-ui/react';
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
		<Box
			mx={2}
			minW={['100vw', '90vw', '80vw', '70vw']}
			w="clamp(300px, calc(100vw - 16px), 1500px)"
			mr={[5, 4, 3, 2, 1]}
			left="50%"
			transform="auto"
			translateX={'-50%'}
			top={'clamp(20px, 6vh, 150px)'}
			position="fixed"
			zIndex={999999}
			bottom={{ base: 0, md: 'auto' }}
			mb={0}
		>
			<Card
				as={motion.div}
				layoutId={layoutIds.container}
				mx="auto"
				w="100%"
				h="100%"
				variant="filled"
				colorScheme="messenger"
				boxShadow="0 7px 12px #2a69ac"
			>
				<CardHeader _hover={{ cursor: 'unset' }} position="relative">
					<CloseButton
						zIndex={99999}
						position="absolute"
						top={2}
						right={2}
						onClick={onClose}
					/>
					<Flex gap="2" alignItems="center" w="100%" flexWrap="wrap">
						<Flex gap={2} alignItems="center">
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
						</Flex>

						{/* <Divider /> */}
						<LinkButton
							href={githubUrl ?? ''}
							aria-label="view github"
							leftIcon={<SiGithub fontSize="1.25rem" />}
							ml={'auto'}
							target="_blank"
							mt={{ base: '2', sm: 'unset' }}
						>
							View code
						</LinkButton>
						<LinkButton
							href={demoUrl ?? ''}
							aria-label="view github"
							leftIcon={<BsDisplay />}
							ml={2}
							mr={{ base: 'auto', sm: 6 }}
							mt={{ base: '2', sm: 'unset' }}
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
			</Card>
		</Box>
	);
}
