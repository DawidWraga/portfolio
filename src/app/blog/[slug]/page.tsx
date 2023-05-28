'use client';

import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allBlogs } from 'contentlayer/generated';

interface BlogPageProps {
	params: { slug: string };
}

export const generateStaticParams = async () =>
	allBlogs.map((blog) => ({ slug: blog._id }));

export const generateMetadata = ({ params }: BlogPageProps) => {
	const post = allBlogs.find((blog) => blog._id === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
	return { title: post.title };
};

export default async function BlogPage({ params }: BlogPageProps) {
	const blog = allBlogs.find((blog) => blog._id === params.slug);
	if (!blog) {
		notFound();
	}

	return (
		<Box
			maxW="3xl"
			py={{ base: 6, lg: 10 }}
			position="relative"
			mt={10}
			mx="auto"
		>
			<Link href="/blog">
				<IconButton
					position="absolute"
					left="-200px"
					top="14"
					display={{ base: 'none', xl: 'inline-flex' }}
					aria-label="See all blogs"
					icon={<ChevronLeftIcon h={4} w={4} />}
					variant="ghost"
				/>
			</Link>
			<Box>
				{blog.createdAt && (
					<Text
						as="time"
						dateTime={blog.createdAt}
						display="block"
						fontSize="sm"
						color={'gray.200'}
					>
						Published on {new Date(blog.createdAt).toLocaleDateString()}
					</Text>
				)}
				<Heading
					mt={2}
					fontSize={{ base: '4xl', lg: '5xl' }}
					lineHeight="tight"
				>
					{blog.title}
				</Heading>
			</Box>
			{/* {blog.image && (
				<Image
					src={blog.image}
					alt={blog.title}
					// width={720}
					// height={405}
					fill
					className="rounded-md shadow-md mt-8 border-2 border-gray-200 "
					priority
				/>
			)} */}
			<div dangerouslySetInnerHTML={{ __html: blog.body.html }} />
			<Box as="hr" mt={12} />
			<Flex justifyContent="center" py={{ base: 6, lg: 10 }}>
				<Link href="/blog">
					<IconButton
						aria-label="See all blogs"
						icon={<ChevronLeftIcon h={4} w={4} />}
						variant="ghost"
					/>
				</Link>
			</Flex>
		</Box>
	);
}
