import { CloseButton, Flex } from '@chakra-ui/react';
import { LinkButton } from 'components/buttons/link-button';
import { BsDisplay } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si';

export interface ProjectLinksProps {
	githubUrl?: string;
	demoUrl?: string;
}

export function ProjectLinks(props: ProjectLinksProps) {
	const { githubUrl, demoUrl } = props;

	return (
		<>
			<Flex gap={3}>
				{githubUrl && (
					<LinkButton
						href={githubUrl}
						aria-label="view github"
						leftIcon={<SiGithub fontSize="1.25rem" />}
						target="_blank"
					>
						View code
					</LinkButton>
				)}
				{demoUrl && (
					<LinkButton
						href={demoUrl}
						aria-label="view github"
						leftIcon={<BsDisplay />}
						target="_blank"
					>
						View live
					</LinkButton>
				)}
			</Flex>
		</>
	);
}
