'use client';
import { Button } from '@chakra/react';
import {
	EmptyState as SaasEmptyState,
	type EmptyStateProps,
} from '@saas/react';
import { useRouter } from 'next/navigation';
// import { QuestionOutlineIcon } from '@chakra/icons';
import { LinkButton } from 'components/buttons/link-button';

export const EmptyState = (props: EmptyStateProps) => {
	const { title, ...rest } = props;
	const router = useRouter();

	return (
		<SaasEmptyState
			colorScheme="brand"
			// icon={QuestionOutlineIcon}
			// icon={FoodIcon}
			title={title || 'Page not found'}
			description="Please check the URL and try again."
			spacing={0}
			sx={{
				mt: '200px',
				h: '100%',
				'& .saas-empty-state__body': {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center',
				},
			}}
			actions={
				<>
					<LinkButton colorScheme="brand" href="/home">
						Home
					</LinkButton>
					<Button onClick={() => router.back()}>Back</Button>
				</>
			}
			{...rest}
		/>
	);
};
