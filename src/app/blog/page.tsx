'use client';

import { Container, Divider, Heading } from '@chakra-ui/react';
import { AboutBlog } from 'app/blog/_ui/about-blog';
import { LatestArticles } from 'app/blog/_ui/latest-articles';
import { TopArticle } from 'app/blog/_ui/top-article';

export interface BlogPageProps {}

export default function BlogPage(props: BlogPageProps) {
	const {} = props;

	return (
		<>
			<Container maxW={'7xl'} p="12" display="flex" flexDir="column" gap={5}>
				<Heading as="h1">Welcome to Dawid's blog</Heading>
				<TopArticle />
				<LatestArticles />

				<Divider marginTop="5" />

				<AboutBlog />
			</Container>
		</>
	);
}
