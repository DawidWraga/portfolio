import { CarouselComplete } from 'components/carousel/carousel-complete';
import { PageWrapper } from 'components/common/page-wrapper';
import { AccordianDetails } from 'components/projects/accordian-details';
import {
	ProjectLinks,
	ProjectLinksProps,
} from 'components/projects/project-links';
import { projects } from 'config/projects';
import { useRouter } from 'next/router';

interface IProps {}

export default function ProjectPage(props: IProps) {
	const {} = props;

	const pId = useRouter()?.query?.projectId;
	const p = projects.find((p) => p.id === pId);

	const links: ProjectLinksProps = {
		demoUrl: p?.demoUrl,
		githubUrl: p?.githubUrl,
	};

	return (
		<>
			<PageWrapper
				title={p?.name}
				hasBackButton
				toolbar={
					<>
						<ProjectLinks {...links} />
					</>
				}
			>
				<CarouselComplete slides={p?.carouselSlides} />
				<AccordianDetails projectDetails={p?.details} />
			</PageWrapper>
		</>
	);
}
