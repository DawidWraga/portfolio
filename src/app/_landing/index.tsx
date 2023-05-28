'use client';

import { Contact } from 'app/_landing/sections/contact';
import { About } from 'app/_landing/sections/about';
// import { BlogSection } from 'app/blog/_ui/BlogSection';/
import { Hero } from 'app/_landing/sections/hero';
import { ProjectCardList } from 'app/_landing/sections/work/project-card-list';

export function LandingPage() {
	return (
		<>
			<Hero />
			<About />
			<ProjectCardList />
			{/* <ProjectsList /> */}
			{/* <BlogSection /> */}
			<Contact />
		</>
	);
}
