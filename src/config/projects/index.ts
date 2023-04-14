import { CarouselSlide } from 'components/carousel/CarouselContext';
import { MakeItAllLogo } from './MakeItAllLogo';
import { GumboLogo } from './gumbo-logo-icon';
import { AxaltLogo } from 'config/projects/axalt-logo';

export type Project = {
	name: string;
	role?: string;
	description: string;
	image: string;
	Icon: any;
	id: string;
	githubUrl?: string;
	demoUrl?: string;
	carouselSlides?: (CarouselSlide & { alt?: any })[];
	wideCard?: boolean;
	details?: ProjectDetails;
};

export type ProjectDetails = {
	overview?: string;
	why?: string;
	role?: string;
	techStack?: string[];
	features?: string[];
	challenges?: string[];
};

export const projectDetailsOrdered = [
	'overview',
	'why',
	'role',
	'techStack',
	'features',
	'challenges',
] as const;

export const projects: Project[] = [
	{
		id: '1',
		name: 'Task & Document management portal',
		role: 'Lead Full-stack Engineer at Make It All',
		description:
			'An intranet portal for managing tasks and documents, featuring Kanban boards, rich text editor, user authentication and more.',
		Icon: MakeItAllLogo,
		image: '/images/makeItAll/demo-1-kanban.jpeg',
		wideCard: true,
		githubUrl: 'https://github.com/DawidWraga/team-project',
		demoUrl: 'https://makeitall.vercel.app/',
		carouselSlides: [
			{
				img: '/images/makeItAll/demo-1-kanban.jpeg',
				label: 'Kanban board',
				description:
					'Create tasks, assign users, drag and drop to move a task between custom statuses and more.',
			},
			{
				img: '/images/makeItAll/demo-2-dashboards.jpeg',
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
		details: {
			why: 'To provide an efficient way for teams to manage tasks and documents internally.',
			features: [
				'The platform offers several features, including Kanban boards for organizing tasks and projects. Users can create tasks, assign users, and drag and drop tasks between custom statuses.',
				'The platform also includes employee dashboards that visualize productivity statistics from completed tasks over the previous months.',
				'The editor is intuitive and user-friendly, making it easy to create and format documents without the need for advanced technical skills.',
				'The platform features secure user authentication using cookies / JWT-based authorization.',
				'The platform also features registration forms and input validation to prevent unauthorized access.',
			],
			challenges: [
				'Implementing secure user authentication',
				'Building a rich text editor',
				'Client and server routing and performance optimization',
			],
		},
	},
	{
		id: '2',
		name: 'Recipe search engine',
		role: 'Lead Front-end Engineer at Gumbo',
		description:
			'A sustainability focused search-engine, leveraging AI to provide users with the best recipes using ingredients they already have at home. ',
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
		name: 'Company Landing page',
		role: 'Junior Full-stack Web Developer at Axalt',
		description:
			'A landing page for a software development consultancy, featuring job applications, contact forms and authentication into the intranet portal.',
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
		role: 'Junior Full-stack Web Developer at Axalt',
		description:
			'Secure and scalable enterprise software for automating employee timesheets, payslips and invoices.',
		Icon: AxaltLogo,
		image: '',
		wideCard: true,
	},
];
