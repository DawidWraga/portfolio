'use client';

import { Contact } from 'app/_landing/sections/contact';
import { About } from 'app/_landing/sections/about';
import { Hero } from 'app/_landing/sections/hero';
import { ProjectCardList } from 'app/_landing/sections/work/project-card-list';
import { BlogSection } from 'app/_landing/sections/blog-section';

export function LandingPage() {
	return (
		<>
			<Hero />
			<About />
			<ProjectCardList />
			<BlogSection />
			<Contact />
		</>
	);
}
