import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	Box,
	Heading,
} from '@chakra-ui/react';
import { AccordianPanel } from 'components/projects/accordian-panel';
import {
	Project,
	ProjectDetails,
	projectDetailsOrdered,
} from 'config/projects';
import { uuid } from 'utils/uuid';

export interface AccordianDetailsProps {
	projectDetails?: ProjectDetails;
}

function createArray(n: number): number[] {
	return [...Array(n + 1).keys()];
}

export function AccordianDetails(props: AccordianDetailsProps) {
	const { projectDetails } = props;
	if (!projectDetails) return null;

	return (
		<>
			<Accordion
				defaultIndex={createArray(Object.keys(projectDetails).length)}
				allowMultiple
			>
				{projectDetailsOrdered.map((key) => {
					const content = projectDetails[key];
					if (!content) return null;

					return (
						<AccordionItem key={uuid()}>
							<h2>
								<AccordionButton>
									<Heading
										fontSize="2xl"
										as="span"
										flex="1"
										textAlign="left"
										my={2}
										textTransform={'capitalize'}
									>
										{key}
									</Heading>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordianPanel content={content} />
						</AccordionItem>
					);
				})}
			</Accordion>
		</>
	);
}
