'use client';
import { CarouselComplete } from 'components/carousel/carousel-complete';
import { ToggleMobileViewButton } from 'components/carousel/toggle-mobile-view.button';
import { PageWrapper } from 'components/common/page-wrapper';
import { AccordianDetails } from 'app/_landing/sections/work/accordian-details';
import { ProjectLinks } from 'app/_landing/sections/work/project-links';
import { projects } from 'config/projects';

interface IProps {
	params: {
		projectId: string;
	};
}

export default function ProjectPage(props: IProps) {
	const { params } = props;

	const { projectId } = params;

	const p = projects.find((p) => p.id === projectId);

	return (
		<>
			<PageWrapper
				title={p?.name}
				hasBackButton
				toolbar={
					<>
						<ToggleMobileViewButton />
						<ProjectLinks links={p?.links} />
					</>
				}
			>
				<CarouselComplete slides={p?.carouselSlides ?? []} />
				<AccordianDetails projectDetails={p?.details} />
			</PageWrapper>
		</>
	);
}
