import { ExternalLinkIcon } from '@chakra/icons';
import { CloseButton, Flex } from '@chakra/react';
import { LinkButton } from 'components/buttons/link-button';
import { Project } from 'config/projects';
import { BsDisplay } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si';

export interface ProjectLinksProps {
	links?: Project['links'];
}

export function ProjectLinks(props: ProjectLinksProps) {
	const { links } = props;

	return (
		<>
			<Flex gap={3}>
				{links?.github && (
					<LinkButton
						href={links?.github}
						aria-label="view github"
						leftIcon={<SiGithub fontSize="1.25rem" />}
						target="_blank"
					>
						View code
					</LinkButton>
				)}
				{links?.demo && (
					<LinkButton
						href={links?.demo}
						aria-label="view github"
						leftIcon={<ExternalLinkIcon />}
						target="_blank"
					>
						View live
					</LinkButton>
				)}
			</Flex>
		</>
	);
}
