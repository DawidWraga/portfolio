import Header from './Header';

interface ILayoutProps {
	children: React.ReactNode;
}

export const MainLayout: React.FC<ILayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};
