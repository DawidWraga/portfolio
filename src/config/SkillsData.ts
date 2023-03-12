import {
	SiTypescript,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiSass,
	SiPhp,
	SiPython,
	SiFramer,
} from 'react-icons/si';

import {
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiChakraui,
	SiPrisma,
	SiMui,
	SiTailwindcss,
} from 'react-icons/si';

import { SiMysql, SiLinux, SiFirebase, SiGooglecloud } from 'react-icons/si';

import {
	SiGit,
	SiGithub,
	SiJira,
	SiVisualstudiocode,
	SiPostman,
	SiJest,
} from 'react-icons/si';
import flattenDeep from 'lodash.flattendeep';

// import { AiFillGithub, AiFillWindows } from 'react-icons/ai';
// import { BsFillCodeSlash } from 'react-icons/bs';
// import { FaFigma, FaPostman } from 'react-icons/fa';
// import { IoLogoJira, IoLogoPostgresql } from 'react-icons/io';
// import { MdWeb } from 'react-icons/md';

import { SiFigma, SiAdobephotoshop, SiDiagramsdotnet } from 'react-icons/si';

export const coreTechnologyNames = [
	'TypeScript',
	'React.js',
	'Next.js',
	'Node.js',
	'Material UI',
	'MySQL',
	'GCO',
	'Linux Bash',
];

export const technologies = {
	'Languages and Markup': [
		{
			name: 'TypeScript',
			link: 'https://www.typescriptlang.org/',
			Icon: SiTypescript,
		},
		{
			name: 'JavaScript',
			link: 'https://www.javascript.com/',
			Icon: SiJavascript,
		},
		{
			name: 'HTML',
			link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
			Icon: SiHtml5,
		},
		{
			name: 'CSS',
			link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
			Icon: SiCss3,
		},
		{
			name: 'Scss',
			link: 'https://sass-lang.com/',
			Icon: SiSass,
		},
		{
			name: 'PHP',
			link: 'https://www.php.net/',
			Icon: SiPhp,
		},
		{
			name: 'Python',
			link: 'https://www.python.org/',
			Icon: SiPython,
		},
		// {
		// 	name: 'Java',
		// 	link: 'https://www.java.com/',
		// 	Icon: SiJava,
		// },
	],
	'Frontend Frameworks and Libraries': [
		{
			name: 'React.js',
			link: 'https://reactjs.org/',
			Icon: SiReact,
		},
		{
			name: 'Next.js',
			link: 'https://nextjs.org/',
			Icon: SiNextdotjs,
		},
		{
			name: 'Material UI',
			link: 'https://material-ui.com/',
			Icon: SiMui,
		},
		{
			name: 'Chakra UI',
			link: 'https://chakra-ui.com/',
			Icon: SiChakraui,
		},
		{
			name: 'Framer Motion',
			link: 'https://www.framer.com/motion/',
			Icon: SiFramer,
		},
		{
			name: 'Tailwind CSS',
			link: 'https://tailwindcss.com/',
			Icon: SiTailwindcss,
		},
	],
	'Backend & Deployment': [
		{
			name: 'Node.js',
			link: 'https://nodejs.org/en/',
			Icon: SiNodedotjs,
		},

		{
			name: 'Linux Bash',
			link: 'https://www.gnu.org/software/bash/',
			Icon: SiLinux,
		},
		{
			name: 'Firebase',
			link: 'https://firebase.google.com/',
			Icon: SiFirebase,
		},

		{
			name: 'MySQL',
			link: 'https://www.mysql.com/',
			Icon: SiMysql,
		},
		{
			name: 'Prisma',
			link: 'https://www.prisma.io/',
			Icon: SiPrisma,
		},

		{
			name: 'GCP',
			link: 'https://cloud.google.com/',
			Icon: SiGooglecloud,
		},
	],
	'Tools and Testing': [
		{
			name: 'Git',
			link: 'https://git-scm.com/',
			Icon: SiGit,
		},
		{
			name: 'GitHub',
			link: 'https://github.com/',
			Icon: SiGithub,
		},
		{
			name: 'Jira',
			link: 'https://www.atlassian.com/software/jira',
			Icon: SiJira,
		},
		{
			name: 'VS Code',
			link: 'https://code.visualstudio.com/',
			Icon: SiVisualstudiocode,
		},
		{
			name: 'Postman',
			link: 'https://www.postman.com/',
			Icon: SiPostman,
		},
		{
			name: 'Jest',
			link: 'https://jestjs.io/',
			Icon: SiJest,
		},
	],
	'Design and Prototyping': [
		{
			name: 'Figma',
			link: 'https://www.figma.com/',
			Icon: SiFigma,
		},
		{
			name: 'Photoshop',
			link: 'https://www.adobe.com/products/photoshop.html',
			Icon: SiAdobephotoshop,
		},
		{
			name: 'Diagrams.net',
			link: 'https://www.diagrams.net/',
			Icon: SiDiagramsdotnet,
		},
	],
};

const flattendedTechnologies = flattenDeep(Object.values(technologies));

export const coreTechnologies = flattendedTechnologies.filter((technology) =>
	coreTechnologyNames.includes(technology.name)
);
