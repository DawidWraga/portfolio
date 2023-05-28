'use client';

import { Container, Divider, Heading } from '@chakra-ui/react';
import { LatestArticles } from 'app/blog/_ui/latest-articles';

export interface BlogPageProps {}

export default function BlogPage(props: BlogPageProps) {
	const {} = props;

	return (
		<>
			<Container maxW={'7xl'} p="12">
				<Heading as="h1">Welcome to Dawid's blog</Heading>
				{/* <TopArticle /> */}
				<LatestArticles />

				<Divider marginTop="5" />

				{/* <AboutBlog /> */}
			</Container>
		</>
	);
}
