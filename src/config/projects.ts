import { CarouselSlide } from 'components/carousel/CarouselContext';
import { MakeItAllLogo } from 'components/MakeItAllLogo';

export type Project = {
	name: string;
	description: string;
	image: string;
	Icon: any;
	id: string;
	githubUrl?: string;
	demoUrl?: string;
	carouselSlides?: CarouselSlide[];
	wideCard?: boolean;
};

export const projects: Project[] = [
	{
		id: '1',
		name: 'Task & Document management portal',
		description:
			'A task management and documentation portal for a software development company.',
		Icon: MakeItAllLogo,
		image: 'images/makeItAll/demo-1-kanban.jpeg',
		wideCard: true,
		githubUrl: 'https://github.com/DawidWraga/team-project',
		demoUrl: 'https://makeitall.vercel.app/',
		carouselSlides: [
			{
				img: '/images/makeItAll/demo-1-kanban.gif',
				label: 'Kanban board',
				description:
					'Create tasks, assign users, drag and drop to move a task between custom statuses and more.',
			},
			{
				img: '/images/makeItAll/demo-2-dashboards.gif',
				label: 'Dashboards',
				description:
					'Employee dashboards vizualising productivity statistics from tasks completed throughout prevous months.',
			},
			{
				img: '/images/makeItAll/demo-3-rich_text.jpeg',
				label: 'Rich text editor',
				description:
					'Intuitive rich text editor with markdown support for creating and editing documents.',
			},
			{
				img: '/images/makeItAll/demo-4-register.gif',
				label: 'Registration & secure authorization',
				description:
					'Secure login using cookies / JWT based authorization, registration forms, input validation, and more',
			},
		],
	},
	{ id: '2', name: 'title2', description: 'subtitle', Icon: '', image: '' },
	{ id: '3', name: 'title4', description: 'subtitle', Icon: '', image: '' },
	{
		id: '4',
		name: 'HR & Invoice management portal (Axalt ltd)',
		description: 'subtitle',
		Icon: '',
		image: '',
		wideCard: true,
	},
];
