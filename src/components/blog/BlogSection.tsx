import { Heading } from '@chakra-ui/react';
import { LatestArticles } from 'components/blog/LatestArticles';
import { Section } from 'components/layouts/Section';

interface IProps {}

export function BlogSection(props: IProps) {
	const {} = props;

	return (
		<Section title="blog">
			<LatestArticles />
		</Section>
	);
}
