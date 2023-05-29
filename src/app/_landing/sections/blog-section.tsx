import { LatestArticles } from 'app/blog/_ui/latest-articles';
import { Section } from 'components/layouts/Section';

interface IProps {}

export function BlogSection(props: IProps) {
	const {} = props;

	return (
		<Section title="blog" viewMoreUrl="/blog">
			<LatestArticles />
		</Section>
	);
}
