import { Icon, IconProps, LinkProps } from '@chakra/react';
import { Link, PropsOf } from '@saas/react';
import type { ComponentPropsWithRef, ReactNode } from 'react';
import { useActiveSectionStore } from 'stores/useActiveSectionStore';

type NavLinkButtonProps = ComponentPropsWithRef<typeof Link> & {
	children?: ReactNode;
	linkProps: LinkProps;
	iconProps?: IconProps;
	icon?: PropsOf<typeof Icon>['as'];
	disableUnderlineSection?: boolean;
};

export const NavLinkButton = ({
	children = 'Button',
	icon,
	iconProps,
	linkProps,
	disableUnderlineSection,
}: NavLinkButtonProps) => {
	const { activeSections } = useActiveSectionStore();

	const sectionIdentifier =
		linkProps?.href?.replace('#', '').replace('/', '') ?? '';
	const isActive =
		!disableUnderlineSection && activeSections.includes(sectionIdentifier);

	return (
		<Link
			{...(isActive && { className: 'active-nav-link' })}
			sx={{
				display: 'flex',
				gap: '0.75rem',
				fontSize: '2rem',
				fontWeight: 300,
				transition: 'color 0.3s ease-in-out',
				textDecoration: 'none !important',
				textDecorationLine: 'none !important',
				...(animatedStyles as any),
				color: '#9CA3AF',
				alignItems: 'center',
				// '&:hover': {
				// 	color: '#F3F4F6',
				// },

				// color: '#1F2937',
			}}
			// _hover={{ color: '#374151' }}
			// _dark={{
			// 	color: '#9CA3AF',
			// 	'&:hover': {
			// 		color: '#F3F4F6',
			// 	},
			// }}
			{...linkProps}
		>
			{children}
			{icon && (
				<Icon
					as={icon}
					size={36}
					{...iconProps}
					sx={{
						// transform: 'rotate(45deg)',
						transition: 'all 0.3s ease-in-out',
						color: '#6B7280',

						// color: '#9CA3AF',
					}}
					_hover={{
						transform: 'translate(1px, 1px)',
						color: '#D1D5DB',
					}}
					// _dark={{
					// 	color: '#6B7280',
					// }}
				/>
			)}
		</Link>
	);
};

const animatedStyles = {
	position: 'relative',
	fontSize: '1.25rem',
	fontWeight: 300,
	transition: 'color 0.3s ease-in-out',
	color: '#9CA3AF',
	'&:hover': {
		// color: '#D1D5DB',
	},
	// color: '#1F2937',
	// '&:hover': {
	// 	color: '#374151',
	// },
	// _dark: {
	// 	color: '#9CA3AF',
	// 	'&:hover': {
	// 		color: '#D1D5DB',
	// 	},
	// },
	'&::before': {
		content: '""',
		position: 'absolute',
		left: 0,
		bottom: '-0.125rem',
		height: '1px',
		width: '100%',
		transformOrigin: 'right',
		transform: 'scaleX(0)',
		backgroundColor: 'brand.700',
		// backgroundColor: '#9CA3AF',
		transition: 'transform 0.3s ease-in-out',
		_dark: {
			backgroundColor: 'brand.700',
			// backgroundColor: '#6B7280',
		},
	},
	'&:hover::before, &.active-nav-link::before': {
		transformOrigin: 'left',
		transform: 'scaleX(1)',
	},
};
// const MobileNavLink = styled(NavLink)({
//   fontSize: '2rem',
//   '_dark': {
//     color: '#9CA3AF',
//     '&:hover': {
//       color: '#D1D5DB',
//     },
//   },
// });
