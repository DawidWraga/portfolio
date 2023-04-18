import { CarouselSlide } from 'components/carousel/CarouselContext';
import { MakeItAllLogo } from './MakeItAllLogo';
import { GumboLogo } from './gumbo-logo-icon';
import { AxaltLogo } from 'config/projects/axalt-logo';

export type Project = {
	id: string;
	name: string;
	role?: string;
	description: string;
	Icon: any;
	links?: {
		github?: string;
		demo?: string;
	};
	carouselSlides?: ProjectCarouselData[];
	details?: ProjectDetails;
};

export type ProjectCarouselData = {
	mediaPath: string;
	alt: string;
	hasVideo?: boolean;
	hasMobile?: boolean;
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
		id: 'makeitall',
		name: 'Task & Document management portal',
		role: 'Lead Full-stack Engineer at Make It All',
		description:
			'An intranet portal for managing tasks and documents, featuring Kanban boards, rich text editor, user authentication and more.',
		Icon: MakeItAllLogo,
		links: {
			github: 'https://github.com/DawidWraga/team-project',
			demo: 'https://makeitall.vercel.app/',
		},
		carouselSlides: [
			{
				mediaPath: '/projects/makeItAll/kanban-crud',
				alt: 'Kanban board',
				hasVideo: true,
				hasMobile: true,
			},
			{
				mediaPath: '/projects/makeItAll/kanban-drag',
				alt: 'Kanban board',
				hasVideo: true,
			},
			{
				mediaPath: '/projects/makeItAll/dashboards',
				alt: 'Dashboards',
				hasVideo: true,
			},
			{
				mediaPath: '/projects/makeItAll/rich-text',
				alt: 'Rich text editor',
			},
			{
				mediaPath: '/projects/makeItAll/register',
				alt: 'Registration & secure authorization',
				hasVideo: true,
			},
		],
		details: {
			why: 'To provide an efficient way for teams to manage tasks and documents internally.',
			features: [
				'Kanban boards for organizing tasks and projects. Users can create tasks, assign users, and drag and drop tasks between custom statuses.',
				'Employee dashboards that visualize productivity statistics from completed tasks over the previous months.',
				'Intuitive and user-friendly rich text editor with markdown support for creating and editing documents.',
				'Secure user authentication using cookies / JWT-based authorization.',
				'Registration forms and input validation to prevent unauthorized access.',
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
		links: {
			demo: 'https://gumbo.co.uk/',
		},
		carouselSlides: [
			{
				mediaPath: '/projects/gumbo/search',
				alt: 'Search engine',
				hasVideo: true,
				hasMobile: true,
			},
			{
				mediaPath: '/projects/gumbo/landing',
				alt: 'Landing page',
				hasVideo: true,
				hasMobile: true,
			},
		],
		details: {
			role: 'Lead Front-end Engineer',
			features: [
				'Intuitive search engine with advanced filtering options, powered by AI to find the best recipes for you.',
			],
			why: 'To provide users with a sustainable way to find recipes using the ingredients they already have at home.',
		},
	},

	{
		id: 'axalt-web',
		name: 'Company Landing page',
		role: 'Junior Full-stack Web Developer at Axalt',
		description:
			'A landing page for a software development consultancy, featuring job applications, contact forms and authentication into the intranet portal.',
		Icon: AxaltLogo,
		carouselSlides: [
			{
				mediaPath: '/projects/axalt/landing',
				alt: 'axalt landing page',
				hasVideo: true,
			},
			{
				mediaPath: '/projects/axalt/auth',
				alt: 'axalt portal authentication',
				hasVideo: true,
			},
		],
		details: {
			why: "To create a visually consistent brand identity and scalable UI architecture that ensures an exceptional user experience for all screens, devices, and browsers. The system features fully-featured forms that streamline the hiring process and client communications, custom-made animations that elevate user engagement, and a showcase of Axalt's successful work with previous clients.",
			features: [
				'Visually consistent brand identity and scalable UI architecture, achieved through custom-made components that are carefully crafted to be highly reusable, modular and flexible.',
				'Responsive design and performance optimisation ensure an exceptional user experience for all screens, devices, and browsers.',
				'Fully featured forms, including backend email services, error validation and user feedback, streamlining the hiring process and client communications.',
				"Showcase of Axalt's successful work with previous clients can be easily updated and maintained as a result of intentionally designed system architecture.",
				'Engaging custom-made animations elevate user engagement with a touch of motion, leaving a lasting impression of the brand.',
			],
		},
	},
	{
		id: '4',
		name: 'Human Resource management portal',
		role: 'Junior Full-stack Web Developer at Axalt',
		description:
			'Secure and scalable enterprise software for automating employee timesheets, payslips and invoices.',
		Icon: AxaltLogo,
		details: {
			features: [
				'Secure authentication, authorization and role based access control (RBAC) for contractors, employees and managers',
				'Add, Submit, view, edit and delete timesheets and expense claims across multiple projects (employees / contractors)',
				'View, approve and reject timesheet/ expense claims for multiple contractors across multiple projects (managers)',
				'View, edit and delete employee details (managers)',
				'Dashboard for quick overview of timesheets and expenses, for checking claim status( employees ) as well as approving or rejecting them (managers)',
				'Scalable architecutre, with a modular and reusable codebase',
				'Fully mobile responsive (mobile-first design) and performance optimized for all screens, devices and browsers',
			],
		},
		carouselSlides: [
			{
				mediaPath: '/projects/axalt/dashboard',
				alt: 'axalt portal dashboard',
				hasVideo: true,
			},
			{
				mediaPath: '/projects/axalt/expense-crud',
				alt: 'axalt portal expense claims',
				hasVideo: true,
			},
			{
				mediaPath: '/projects/axalt/timesheet',
				alt: 'Axalt portal timesheets',
				hasVideo: true,
			},
			{
				mediaPath: '/projects/axalt/approvals',
				alt: 'Axalt portal approvals',
				hasVideo: true,
			},
			{
				mediaPath: '/projects/axalt/auth',
				alt: 'axalt portal authentication',
				hasVideo: true,
			},
		],
	},
];
