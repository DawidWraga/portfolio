import { Box, Image, Link, useColorModeValue } from '@chakra/react';
import { BlogCard } from 'app/blog/_ui/blog-card';
import { allBlogs, Blog } from 'contentlayer/generated';

export interface TopArticleProps {}

export function TopArticle(props: TopArticleProps) {
	const {} = props;

	const { thumbnailPath, ...blogWithoutImg } = allBlogs[0];

	return (
		<>
			<Box
				marginTop={{ base: '1', sm: '5' }}
				display="flex"
				flexDirection={{ base: 'column', sm: 'row' }}
				justifyContent="space-between"
			>
				<Box
					display="flex"
					flex="1"
					marginRight="3"
					position="relative"
					alignItems="center"
				>
					<Box
						width={{ base: '100%', sm: '85%' }}
						zIndex="2"
						marginLeft={{ base: '0', sm: '5%' }}
						marginTop="5%"
					>
						<Link
							href={blogWithoutImg.url}
							textDecoration="none"
							_hover={{ textDecoration: 'none' }}
						>
							<Image
								borderRadius="lg"
								src={thumbnailPath}
								alt="some good alt text"
								objectFit="contain"
							/>
						</Link>
					</Box>
					<Box zIndex="1" width="100%" position="absolute" height="100%">
						<Box
							bgGradient={useColorModeValue(
								'radial(orange.600 1px, transparent 1px)',
								'radial(orange.300 1px, transparent 1px)'
							)}
							backgroundSize="20px 20px"
							opacity="0.4"
							height="100%"
						/>
					</Box>
				</Box>
				<BlogCard
					blog={blogWithoutImg as Blog}
					linkWrapperProps={{
						flex: '1',
						sx: {
							mt: 2,
							gap: 2,
							'& > h2': {
								fontSize: '1.7rem',
							},
						},
					}}
				/>
				{/* <Box
					display="flex"
					flex="1"
					flexDirection="column"
					justifyContent="center"
					marginTop={{ base: '3', sm: '0' }}
				>
					<Heading marginTop="1">
						<Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
							Blog article title
						</Link>
					</Heading>
					<Text
						as="p"
						marginTop="2"
						color={useColorModeValue('gray.700', 'gray.200')}
						fontSize="lg"
					>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</Text>
					<Flex gap={3} mt={3}>
						<BlogTags tags={['Engineering', 'Product']} />

						<Text>{new Date().toLocaleDateString()} </Text>
					</Flex>
				</Box> */}
			</Box>
		</>
	);
}
