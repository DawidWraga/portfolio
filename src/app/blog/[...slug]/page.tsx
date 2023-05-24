'use client';

import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
	Box,
	Flex,
	Heading,
	IconButton,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PostPageProps {
	params: {
		slug: string[];
	};
}

const allPosts = [
	{
		title: 'My first post',
		slug: 'test-post',
		slugAsParams: 'test-post',
		date: new Date('2021-10-10T00:00:00.000Z'),
		author: 'John Doe',
		image: '/projects/axalt/approvals/desktop.png',
	},
];

export async function generateStaticParams(): Promise<
	PostPageProps['params'][]
> {
	return allPosts.map((post) => ({
		slug: post.slugAsParams.split('/'),
	}));
}

async function getPostFromParams(params: PostPageProps['params']) {
	const slug = params?.slug?.join('/');
	console.log('slug', slug);
	const post = allPosts.find((post) => post.slugAsParams === slug);

	console.log('post', post);
	if (!post) {
		null;
	}

	return post;
}

export default async function PostPage({ params }: PostPageProps) {
	const post = await getPostFromParams(params);

	const textColor = 'gray.200';
	// const borderColor = useColorModeValue('gray.200', 'gray.600');
	if (!post) {
		notFound();
	}

	return (
		<Box maxW="3xl" py={{ base: 6, lg: 10 }} position="relative">
			<Link href="/blog">
				<IconButton
					position="absolute"
					left="-200px"
					top="14"
					display={{ base: 'none', xl: 'inline-flex' }}
					aria-label="See all posts"
					icon={<ChevronLeftIcon h={4} w={4} />}
					variant="ghost"
				/>
			</Link>
			<Box>
				{post.date && (
					<Text
						as="time"
						dateTime={post.date.toDateString()}
						display="block"
						fontSize="sm"
						color={textColor}
					>
						Published on {post.date.toLocaleDateString()}
					</Text>
				)}
				<Heading
					mt={2}
					fontSize={{ base: '4xl', lg: '5xl' }}
					lineHeight="tight"
				>
					{post.title}
				</Heading>
			</Box>
			{/* {post.image && (
				<Image
					src={post.image}
					alt={post.title}
					// width={720}
					// height={405}
					fill
					className="rounded-md shadow-md mt-8 border-2 border-gray-200 "
					priority
				/>
			)} */}
			<Box>BODY CONTENT</Box>
			<Box as="hr" mt={12} />
			<Flex justifyContent="center" py={{ base: 6, lg: 10 }}>
				<Link href="/blog">
					<IconButton
						aria-label="See all posts"
						icon={<ChevronLeftIcon h={4} w={4} />}
						variant="ghost"
					/>
				</Link>
			</Flex>
		</Box>
	);
}
