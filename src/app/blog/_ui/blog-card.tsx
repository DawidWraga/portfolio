import { Image, Link, LinkProps } from '@chakra/next-js';
import { Box, Flex, Heading, Text } from '@chakra/react';
import { BlogTags } from 'app/blog/_ui/blog-tags';
import { Blog } from 'contentlayer/generated';

export interface BlogCardProps {
	blog: Blog;
	linkWrapperProps?: Partial<LinkProps>;
}

export function BlogCard(props: BlogCardProps) {
	const { blog, linkWrapperProps } = props;
	const { title, description, tags, url, createdAt, thumbnailPath } = blog;

	return (
		<>
			<Link
				href={url}
				textDecoration="none"
				_hover={{ textDecoration: 'none' }}
				// w="100%"
				display="flex"
				flexDir={'column'}
				{...linkWrapperProps}
			>
				{thumbnailPath && (
					<Box rounded="lg" overflow="hidden" maxW={600} maxH={300}>
						<Image
							transform="scale(1.0)"
							src={thumbnailPath}
							alt="some text"
							// objectFit=""
							width={600}
							height={300}
							// fill
							rounded="lg"
							sx={{ borderRadius: 'lg', objectFit: 'contain' }}
							// sx={{ width: '100%' }}
							transition="0.3s ease-in-out"
							_hover={{
								transform: 'scale(1.05)',
							}}
						/>
					</Box>
				)}
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
