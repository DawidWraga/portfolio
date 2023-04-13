import { CarouselSlide } from 'components/carousel/CarouselContext';
import { MakeItAllLogo } from './MakeItAllLogo';
import { GumboLogo } from './gumbo-logo-icon';
import { AxaltLogo } from 'config/projects/axalt-logo';

export type Project = {
	name: string;
	description: string;
	image: string;
	Icon: any;
	id: string;
	githubUrl?: string;
	demoUrl?: string;
	carouselSlides?: (CarouselSlide & { alt?: any })[];
	wideCard?: boolean;
};

export const projects: Project[] = [
	{
		id: '1',
		name: 'Task & Document management portal',
		description:
			'A task management and documentation portal for a software development company.',
		Icon: MakeItAllLogo,
		image: '/images/makeItAll/demo-1-kanban.jpeg',
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
	{
		id: '2',
		name: 'Ai powered sustainable recipe search engine',
		description: '',
		Icon: GumboLogo,
		image: '/projects/gumbo/search/desktop.png',
		carouselSlides: [
			{
				label: 'Search engine',
				img: '/projects/gumbo/search/desktop.png',
				description:
					'Intuitive search engine with advanced filtering options, powered by AI to find the best recipes for you.',
			},
		],
	},
	{
		id: '3',
		name: 'Landing page',
		description: 'Company website & job application portal',
		Icon: AxaltLogo,
		image: '',
		carouselSlides: [
			{
				label: 'Design system',
				img: '/images/axalt-web/design-system.gif',
				description:
					'Visually consistent brand identity and scalable UI architecture, achieved through custom-made components that are carefully crafted to be highly reusable, modular and flexible.',
				alt: 'scroll through top to bottom',
			},
			{
				label: 'Mobile first',
				img: '/images/axalt-web/mobile-first.jpeg',
				description:
					'Responsive design and performance optimisation ensure an exceptional user experience for all screens, devices, and browsers.',
				alt: 'open side nav, open login, close login, scroll to bottom',
			},
			{
				label: 'Job application & contact forms',
				img: '/images/axalt-web/job-application-contact-forms.jpeg',
				description:
					'Fully featured forms, including backend email services, error validation and user feedback, streamlining the hiring process and client communications.',
				alt: 'type in form except for email, type in email, submit form, submit form with error, submit form with success',
			},
			{
				label: 'Clients & testemonials',
				img: '/images/axalt-web/client-endorsements.jpeg',
				description:
					"Showcase of Axalt's successful work with previous clients can be easily updated and maintained as a result of intentionally designed system architecture.",
			},
			{
				label: 'Animations',
				img: '/images/axalt-web/animations.jpeg',
				description:
					'Engaging custom-made animations elevate user engagement with a touch of motion, leaving a lasting impression of the brand.',
			},
		],
	},
	{
		id: '4',
		name: 'Human Resource management portal',
		description:
			'Employee portal for timesheet, payslip and invoice automation',
		Icon: AxaltLogo,
		image: '',
		wideCard: true,
	},
];
