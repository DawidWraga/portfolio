import { PageWrapper } from 'components/common/page-wrapper';
import { projects } from 'config/projects';
import { useRouter } from 'next/router';

interface IProps {}

export default function projectPage(props: IProps) {
	const {} = props;

	const pId = useRouter()?.query?.projectId;
	const p = projects.find((p) => p.id === pId);

	return (
		<>
			<PageWrapper title={p?.name} hasBackButton>
				test
			</PageWrapper>
		</>
	);
}
