import Head from 'next/head';
import { SkillsGrid } from 'components/work/SkillsGrid';
import { Hero } from 'components/hero';
import { ProjectsList } from 'components/work/ProjectsList';
import { About } from 'components/about';
import { Box } from '@chakra-ui/react';

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
			<Box h="800px"></Box>
		</>
	);
}
