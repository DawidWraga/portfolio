import { Box, Button, ButtonProps } from '@chakra/react';
import NextLink, { LinkProps } from 'next/link';

type conflictingLinkProps = 'as' | 'onClick' | 'onMouseEnter' | 'onTouchStart';
interface IProps
	extends ButtonProps,
		Omit<LinkProps, 'passHref' | conflictingLinkProps> {
	children: React.ReactNode;
	target?: string;
}

export function LinkButton(props: IProps) {
	const {
		children,
		href,
		legacyBehavior,
		prefetch,
		replace,
		scroll,
		shallow,
		locale,
		...rest
	} = props;

	const linkProps = {
		href,
		legacyBehavior,
		prefetch,
		replace,
		scroll,
		shallow,
		locale,
	};

	return (
		<NextLink passHref {...linkProps}>
			<Button as="a" {...rest}>
				{children}
			</Button>
		</NextLink>
	);
}
