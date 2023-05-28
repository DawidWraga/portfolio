import { Providers } from 'app/providers';

export const metadata = {
	title: 'Dawid Wraga Portfolio Page',
	description: 'Full stack web developer portfolio page',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className="scroll-smooth"
			style={{ scrollBehavior: 'smooth' }}
		>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
