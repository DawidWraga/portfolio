import { Box, Grid, Heading } from '@chakra-ui/react';
import { BlogCard } from 'app/blog/_ui/blog-card';
import { allBlogs } from 'contentlayer/generated';

interface LatestArticlesProps {}

export function LatestArticles(props: LatestArticlesProps) {
	const {} = props;

	return (
		<Box>
			<Heading as="h2" marginTop="5">
				Latest articles
			</Heading>
			<Grid templateColumns="repeat(3, 1fr)" gap={6} mt="5">
				{allBlogs.map((blog) => {
					return <BlogCard key={blog._id} blog={blog} />;
				})}
			</Grid>
		</Box>
	);
}