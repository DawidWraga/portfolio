import { AccordionPanel, Flex, Text } from '@chakra/react';
import { randomUUID } from 'crypto';
import { getStaggerProps } from 'motion/get-stagger-props';
import { uuid } from 'utils/uuid';

export interface AccordianPanelProps {
	content: string[] | string;
}

const staggerProps = getStaggerProps({
	staggerChildren: 0.5,
});

export function AccordianPanel(props: AccordianPanelProps) {
	const { content } = props;

	return (
		<>
			<AccordionPanel pb={4}>
				{Array.isArray(content) ? (
					<Flex
						{...staggerProps.container}
						flexDir="column"
						gap={2}
						p={2}
						sx={{
							'& li': {
								mb: '1rem',
								fontSize: 'lg',
								listStyleType: 'disc',
							},
						}}
					>
						{content.map((item) => (
							<Text key={uuid()} {...staggerProps.children}>
								{item}
							</Text>
						))}
					</Flex>
				) : (
					content
				)}
			</AccordionPanel>
		</>
	);
}
