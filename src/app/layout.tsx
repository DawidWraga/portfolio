import { NavigationEvents } from 'app/_setup/navigation-events';
import { Providers } from 'app/_setup/providers';
import { MainLayout } from 'app/_main-layout/main-layout';

export const metadata = {
	title: 'Dawid Wraga Portfolio Page',
	description: 'Full stack web developer portfolio page',
};

export default function RootLayout({ children }: ChildrenProps) {
	return (
		<HtmlWrapper>
			<Providers>
				<NavigationEvents />
				<MainLayout>{children}</MainLayout>
			</Providers>
		</HtmlWrapper>
	);
}

// default wrapper needed for nextjs
function HtmlWrapper({ children }: ChildrenProps) {
	return (
		<html
			lang="en"
			// ensure smooth scrolling
			className="scroll-smooth"
			style={{ scrollBehavior: 'smooth' }}
		>
			<body>{children}</body>
		</html>
	);
}

type ChildrenProps = {
	children: React.ReactNode;
};
