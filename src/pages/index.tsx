import Head from 'next/head';
import { SkillsGrid } from 'components/work/SkillsGrid';
import { Hero } from 'components/hero';
import { ProjectsList } from 'components/work/ProjectsList';
import { About } from 'components/about';
import { Box } from '@chakra-ui/react';
import { BlogSection } from 'components/blog/BlogSection';
import { Footer } from 'components/layouts/Footer';
import { Contact } from 'components/Contact';

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
			<ProjectsList />
			<About />
			<BlogSection />
			<Contact />
			<Footer />
		</>
	);
}
