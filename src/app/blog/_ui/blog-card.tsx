import { Link } from '@chakra-ui/next-js';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { BlogTags } from 'app/blog/_ui/blog-tags';
import { Blog } from 'contentlayer/generated';

export interface BlogCardProps {
	blog: Blog;
}

export function BlogCard(props: BlogCardProps) {
	const { blog } = props;
	const { title, description, tags, url, createdAt } = blog;

	return (
		<>
			<Link
				href={url}
				textDecoration="none"
				_hover={{ textDecoration: 'none' }}
				w="100%"
			>
				<Box borderRadius="lg" overflow="hidden">
					<Image
						transform="scale(1.0)"
						src={blog.thumbnailPath}
						alt="some text"
						objectFit="contain"
						width="100%"
						transition="0.3s ease-in-out"
						_hover={{
							transform: 'scale(1.05)',
						}}
					/>
				</Box>
				<Heading fontSize="xl" marginTop="2">
					{title}
				</Heading>
				<Text as="p" fontSize="md" marginTop="2">
					{description}
				</Text>
				<Flex gap={3} mt={3}>
					<BlogTags tags={tags} />

					{createdAt && (
						<Text>{new Date(createdAt).toLocaleDateString()} </Text>
					)}
				</Flex>
			</Link>
		</>
	);
}
