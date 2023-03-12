import { AppShell } from '@saas-ui/react';
import Header from './Header';

interface ILayoutProps {
	children: React.ReactNode;
}

export const MainLayout: React.FC<ILayoutProps> = ({ children }) => {
	return <AppShell navbar={<Header />}>{children}</AppShell>;
};
