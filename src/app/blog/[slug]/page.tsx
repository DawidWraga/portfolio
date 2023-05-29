import { ChevronLeftIcon } from '@chakra/icons';
import { Image } from '@chakra/next-js';
import { Box, Circle, Flex, Heading, IconButton, Text } from '@chakra/react';
import { Persona } from '@saas/react';
import { BlogTags } from 'app/blog/_ui/blog-tags';
import { PageWrapper } from 'components/common/page-wrapper';
import { ScrollIndicator } from 'components/common/scroll-indicator';
import { allBlogs } from 'contentlayer/generated';
import { format } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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

export default function BlogPage({ params }: BlogPageProps) {
	const blog = allBlogs.find((blog) => blog._id === params.slug);
	if (!blog) {
		notFound();
	}

	return (
		<PageWrapper
			title={''}
			hasBackButton
			childrenContainerProps={{
				gap: 5,
			}}
		>
			<ScrollIndicator />
			<Flex flexDir="column" gap={2} align="center">
				<Heading
					mt={2}
					fontSize={{ base: '4xl', lg: '5xl' }}
					lineHeight="tight"
					mx="auto"
				>
					{blog.title}
				</Heading>
				<BlogTags tags={blog.tags} />

				<Flex
					gap={2}
					align="center"
					sx={{
						'& *': {
							color: 'gray.400',
						},
					}}
				>
					<Persona
						name="Dawid Wraga"
						src="/images/face-photo.png"
						size="sm"
						sx={{
							'& img': {
								mr: 2,
							},
						}}
					/>
					<Circle size="8px" bg="gray.600" />

					{blog.createdAt && (
						<Text as="time" dateTime={blog.createdAt}>
							{format(new Date(blog.createdAt), 'do MMM yyyy')}
						</Text>
					)}
					<Circle size="8px" bg="gray.600" />
					{blog.readingTime && <Text>{blog.readingTime.text}</Text>}
				</Flex>
			</Flex>

			{blog.thumbnailPath && (
				<Image
					src={blog.thumbnailPath}
					alt={blog.title || ''}
					width={850}
					height={405}
					mx="auto"
					rounded="md"
					priority
				/>
			)}
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
		</PageWrapper>
	);
}
