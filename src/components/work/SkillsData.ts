import {
	SiFirebase,
	SiTypescript,
	SiNextdotjs,
	SiJava,
	SiPhp,
	SiPostgresql,
	SiMongodb,
	SiNestjs,
	SiLaravel,
	SiVuedotjs,
	SiTailwindcss,
	SiVisualstudiocode,
	SiJetbrains,
	SiGit,
	SiDocker,
	SiGithubactions,
	SiGooglecloud,
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiAdobepremierepro,
	SiReact,
} from 'react-icons/si';

export const technologies = {
	languages: [
		{
			name: 'TypeScript',
			level: 'Basic',
			link: 'https://www.typescriptlang.org/',
			icon: SiTypescript,
		},
		{
			name: 'Java',
			level: 'Advanced',
			link: 'https://www.java.com/',
			icon: SiJava,
		},
		{
			name: 'PHP',
			level: 'Advanced',
			link: 'https://www.php.net/',
			icon: SiPhp,
		},
	],
	web_frameworks: [
		{
			name: 'ReactJS',
			level: 'Advanced',
			link: 'https://reactjs.org/',
			icon: SiReact,
		},
		{
			name: 'NextJS',
			level: 'Advanced',
			link: 'https://nextjs.org/',
			icon: SiNextdotjs,
		},
		{
			name: 'VueJS',
			level: 'Basic',
			link: 'https://vuejs.org/',
			icon: SiVuedotjs,
		},
		{
			name: 'TailwindCSS',
			level: 'Advanced',
			link: 'https://tailwindcss.com/',
			icon: SiTailwindcss,
		},
		{
			name: 'Laravel',
			level: 'Advanced',
			link: 'https://laravel.com/',
			icon: SiLaravel,
		},
		{
			name: 'NestJS',
			level: 'Advanced',
			link: 'https://nestjs.com/',
			icon: SiNestjs,
		},
	],

	databases: [
		{
			name: 'PostgreSQL',
			level: 'Basic',
			link: 'https://www.mysql.com/',
			icon: SiPostgresql,
		},
		{
			name: 'MongoDB',
			level: 'Basic',
			link: 'https://www.mongodb.com/',
			icon: SiMongodb,
		},
		{
			name: 'Firebase',
			level: 'Advanced',
			link: 'https://firebase.google.com/',
			icon: SiFirebase,
		},
	],
	design: [
		{
			name: 'Photoshop',
			level: 'Basic',
			link: 'https://www.adobe.com/tw/products/photoshop.html',
			icon: SiAdobephotoshop,
		},
		{
			name: 'Illustrator',
			level: 'Basic',
			link: 'https://www.adobe.com/tw/products/illustrator.html',
			icon: SiAdobeillustrator,
		},
		{
			name: 'Premiere Pro',
			level: 'Basic',
			link: 'https://www.adobe.com/tw/products/premiere.html',
			icon: SiAdobepremierepro,
		},
	],
	other_tools: [
		{
			name: 'Git',
			level: 'Advanced',
			link: 'https://git-scm.com/',
			icon: SiGit,
		},
		{
			name: 'VS Code',
			level: 'Advanced',
			link: 'https://code.visualstudio.com/',
			icon: SiVisualstudiocode,
		},
		{
			name: 'JetBrains IDE',
			level: 'Advanced',
			link: 'https://www.jetbrains.com/',
			icon: SiJetbrains,
		},
	],
};
