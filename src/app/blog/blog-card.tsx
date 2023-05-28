import {
	Box,
	Flex,
	Heading,
	Image,
	Link,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import { BlogAuthor } from 'components/blog/BlogAuthor';
import { BlogTags } from 'components/blog/BlogTags';
import { Blog } from 'contentlayer/generated';

export interface BlogCardProps {
	blog: Blog;
}

export function BlogCard(props: BlogCardProps) {
	const { blog } = props;
	const { title, description, tags, url } = blog;

	return (
		<>
			{' '}
			<Box w="100%">
				<Box borderRadius="lg" overflow="hidden">
					<Link
						href={url}
						textDecoration="none"
						_hover={{ textDecoration: 'none' }}
					>
						<Image
							transform="scale(1.0)"
							src={
								'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
							}
							alt="some text"
							objectFit="contain"
							width="100%"
							transition="0.3s ease-in-out"
							_hover={{
								transform: 'scale(1.05)',
							}}
						/>
					</Link>
				</Box>
				<Heading fontSize="xl" marginTop="2">
					<Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
						Some blog title
					</Link>
				</Heading>
				<Text as="p" fontSize="md" marginTop="2">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</Text>
				<Flex gap={3} mt={3}>
					<BlogTags tags={['Engineering', 'Product']} />

					<Text>{new Date().toLocaleDateString()} </Text>
				</Flex>
			</Box>
		</>
	);
}
