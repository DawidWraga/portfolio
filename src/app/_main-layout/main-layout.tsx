'use client';
import { AppShell } from '@saas/react';
import ColorModeToggle from 'components/buttons/ColorModeToggle';
import { Header } from 'app/_main-layout/header';
import { Footer } from 'app/_main-layout/footer';

interface ILayoutProps {
	children: React.ReactNode;
}

export const MainLayout: React.FC<ILayoutProps> = ({ children }) => {
	return (
		<AppShell navbar={<Header />} footer={<Footer />}>
			<>
				{children}
				{/* <ColorModeToggle /> */}
			</>
		</AppShell>
	);
};
