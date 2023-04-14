import { CarouselComplete } from 'components/carousel/carousel-complete';
import { PageWrapper } from 'components/common/page-wrapper';
import { AccordianDetails } from 'components/projects/accordian-details';
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
				<CarouselComplete slides={p?.carouselSlides} />
				<AccordianDetails projectDetails={p?.details} />
			</PageWrapper>
		</>
	);
}
