import { CloseButton, Flex } from '@chakra-ui/react';
import { LinkButton } from 'components/buttons/link-button';
import { BsDisplay } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si';

export interface LinksAndCloseProps {
	githubUrl?: string;
	demoUrl?: string;
	onClose: () => void;
}

export function LinksAndClose(props: LinksAndCloseProps) {
	const { githubUrl, demoUrl, onClose } = props;

	return (
		<>
			<Flex pos="fixed" top={2} right={2} gap={3}>
				<LinkButton
					href={githubUrl ?? ''}
					aria-label="view github"
					leftIcon={<SiGithub fontSize="1.25rem" />}
					target="_blank"
				>
					View code
				</LinkButton>
				<LinkButton
					href={demoUrl ?? ''}
					aria-label="view github"
					leftIcon={<BsDisplay />}
					target="_blank"
				>
					View live
				</LinkButton>
				<CloseButton onClick={onClose} />
			</Flex>
		</>
	);
}
