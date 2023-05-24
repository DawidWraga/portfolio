import {
	Box,
	Container,
	Divider,
	Heading,
	HStack,
	Image,
	Link,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { BlogAuthor } from 'components/blog/BlogAuthor';
import { BlogTags } from 'components/blog/BlogTags';
import { LatestArticles } from 'components/blog/LatestArticles';
import React from 'react';

export interface AboutBlogProps {}

export function AboutBlog(props: AboutBlogProps) {
	const {} = props;

	return (
		<>
			{' '}
			<VStack paddingTop="40px" spacing="2" alignItems="flex-start">
				<Heading as="h2">What we write about</Heading>
				<Text as="p" fontSize="lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
					pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
					imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
					sapien. Suspendisse placerat vulputate posuere. Curabitur neque
					tortor, mattis nec lacus non, placerat congue elit.
				</Text>
				<Text as="p" fontSize="lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
					pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
					imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
					sapien. Suspendisse placerat vulputate posuere. Curabitur neque
					tortor, mattis nec lacus non, placerat congue elit.
				</Text>
				<Text as="p" fontSize="lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
					pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
					imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
					sapien. Suspendisse placerat vulputate posuere. Curabitur neque
					tortor, mattis nec lacus non, placerat congue elit.
				</Text>
			</VStack>
		</>
	);
}
