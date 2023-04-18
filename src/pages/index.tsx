import { Contact } from 'components/Contact';
import { About } from 'components/about';
import { Hero } from 'components/hero';
import { Footer } from 'components/layouts/Footer';
import { ProjectCardList } from 'components/projects/project-card-list';
import Head from 'next/head';

export default function LandingPage() {
	return (
		<>
			<Head>
				<title>Dawid Wraga</title>
				<meta
					name="description"
					content="Full stack web developer portfolio page"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			<About />
			<ProjectCardList />
			{/* <ProjectsList /> */}
			{/* <BlogSection /> */}
			<Contact />
			<Footer />
		</>
	);
}
