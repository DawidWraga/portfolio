import Header from '../components/Header';

interface ILayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
