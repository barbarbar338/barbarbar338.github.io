import MongoDBSVG from "@assets/elements/mongodb.svg";
import NestSVG from "@assets/elements/nest.svg";
import NextSVG from "@assets/elements/next.svg";
import TailwindSVG from "@assets/elements/tailwind.svg";
import { CONTACT, DISCORD_ID, SOCIALS } from "@libs/config/accounts";

const NOW = new Date().getFullYear();
const STARTED_AT = 2010;
const EXPERIENCE = NOW - STARTED_AT;

export interface IFramework {
	name: string;
	color: string;
	experience: number;
	icon: string;
}

const domain = "338.rocks";

const SEO = {
	layoutTitle: "%s - Barış DEMİRCİ",
	title: "Home - Barış DEMİRCİ",
	domain,
	publishDomain: `https://${domain}`,
	themeColor: "#6D28D9",
	keywords: [
		"baris",
		"demirci",
		"barisbored",
		"barbar",
		"338",
		"hammer",
		"projecthammer",
		"blog",
		"react",
		"next",
		"reactjs",
		"nextjs",
		"barbarbar338",
		"barbarbar",
	],
	description: "Welcome to barbarbar338's profile!",
};

export const CONFIG = {
	EMAIL: "demirci.baris38@gmail.com",
	GITHUB_USERNAME: "barbarbar338",
	AVATAR_URL: "https://avatars.githubusercontent.com/u/35371155",
	API_URL: "https://api.338.rocks",
	STORAGE_URL: "https://storage.338.rocks",
	LANYARD_ID: DISCORD_ID,
	STARTED_AT,
	NOW,
	EXPERIENCE,
	GA_TRACKING_ID: "G-14SS6XWKC1",
	IMPORTANT_SKILLS: [
		"JavaScript (Node & Client-Side)",
		"TypeScript",
		"GoLang",
		"NoSQL (MongoDB & Redis)",
		"SQL (Postgre & Sqlite)",
	],
	FAVOURITE_FRAMEWORKS: [
		{
			name: "NestJS",
			color: "bg-red-500 dark:bg-red-800",
			experience: NOW - 2020,
			icon: NestSVG,
		},
		{
			name: "MongoDB",
			color: "bg-green-500 dark:bg-green-800",
			experience: NOW - 2015,
			icon: MongoDBSVG,
		},
		{
			name: "NextJS",
			color: "bg-gray-500 dark:bg-gray-700",
			experience: NOW - 2019,
			icon: NextSVG,
		},
		{
			name: "TailwindCSS",
			color: "bg-blue-500 dark:bg-blue-800",
			experience: NOW - 2020,
			icon: TailwindSVG,
		},
	] as IFramework[],
	INTERESTS: [
		{
			name: "TypeScript",
			color: "text-blue-600 dark:text-blue-400",
			href: "https://www.typescriptlang.org/",
		},
		{
			name: "NestJS",
			color: "text-red-600 dark:text-red-400",
			href: "https://nestjs.com/",
		},
		{
			name: "ReactJS",
			color: "text-blue-600 dark:text-blue-400",
			href: "https://reactjs.org/",
		},
		{
			name: "NextJS",
			color: "text-indigo-700 dark:text-indigo-300",
			href: "https://nextjs.org/",
		},
		{
			name: "Rust",
			color: "text-red-500 dark:text-red-300",
			href: "https://www.rust-lang.org",
		},
	],
	CONTACT,
	SOCIALS,
	BLOG: {
		discussions: {
			username: "barbarbar338",
			repo: "webpage",
			repo_id: "MDEwOlJlcG9zaXRvcnkyNjc3OTQ5NDE=",
		},
	},
	SOURCE: {
		repo: "webpage",
		username: "barbarbar338",
	},
	DEV: process.env.NODE_ENV != "production",
	REVALIDATION: 60 * 5,
	SEO,
	PHONE: "+905511481779",
	LOCATION: "Kayseri, Turkey",
	SKILLS: [
		[
			{
				name: "Turkish (Native)",
				value: 100,
				color: "bg-red-600",
			},
			{
				name: "English (B2-C1)",
				value: 70,
				color: "bg-blue-600",
			},
		],
		[
			{
				name: "JavaScript",
				value: 95,
				color: "bg-yellow-600",
			},
			{
				name: "TypeScript",
				value: 90,
				color: "bg-blue-600",
			},
			{
				name: "GoLang",
				value: 65,
				color: "bg-blue-600",
			},
			{
				name: "Python",
				value: 85,
				color: "bg-green-500",
			},
		],
		[
			{
				name: "ReactJS",
				value: 90,
				color: "bg-blue-600",
			},
			{
				name: "NextJS",
				value: 85,
				color: "bg-gray-600",
			},
			{
				name: "NestJS",
				value: 80,
				color: "bg-red-600",
			},
			{
				name: "TailwindCSS",
				value: 70,
				color: "bg-blue-600",
			},
		],
		[
			{
				name: "Proxmox",
				value: 95,
				color: "bg-yellow-700",
			},
			{
				name: "ESXi",
				value: 70,
				color: "bg-blue-600",
			},
			{
				name: "Ansible",
				value: 75,
				color: "bg-red-600",
			},
			{
				name: "LXC/LXD",
				value: 80,
				color: "bg-yellow-600",
			},
		],
		[
			{
				name: "MongoDB",
				value: 90,
				color: "bg-green-600",
			},
			{
				name: "Redis",
				value: 90,
				color: "bg-red-600",
			},
			{
				name: "PostgreSQL",
				value: 90,
				color: "bg-blue-600",
			},
			{
				name: "SQLite",
				value: 80,
				color: "bg-blue-600",
			},
		],
		[
			{
				name: "System Administrator",
				value: 70,
				color: "bg-gray-700",
			},
			{
				name: "Networking",
				value: 65,
				color: "bg-green-700",
			},
			{
				name: "Linux",
				value: 85,
				color: "bg-black",
			},
		],
	],
	EDUCATION: [
		{
			name: "agu",
			department: "eee",
			era: "2022 - 2026",
			degree: "bachelors",
			gpa: "3.5",
		},
	],
	WORK_EXPERIENCE: [
		{
			name: "Freelancer",
			era: "2010 - present",
			title: "Back-End Developer",
			location: "Global",
			description:
				"Working as a freelancer since 2010. Created thousands of projects for clients.",
		},
		{
			name: "Denka Metal",
			era: "2023 - present",
			title: "CNC Welding Robot Programmer",
			location: "Kayseri, Turkey",
			description:
				"Working as a welding robot programmer, creating metal products globally.",
		},
		{
			name: "Denka Metal",
			era: "2023 - present",
			title: "CNC Laser Cut Operator",
			location: "Kayseri, Turkey",
			description:
				"Working as a CNC Laser cut operator here, creating metal products globally.",
		},
		{
			name: "HastePaste",
			era: "2020 - 2022",
			title: "Founder",
			location: "Kayseri, Turkey",
			description:
				"A file-sharing application with no subscription required. Share, edit, and delete files with ease. Worked here as a back-end developer and DevOps engineer.",
		},
		{
			name: "Doory",
			era: "2020 - 2020",
			title: "Front-End Developer",
			location: "Ankara, Turkey",
			description:
				"A food delivery & deli application. Worked here as a front-end developer.",
		},
	],
	CERTIFICATES: [
		{
			name: "Go Certificate",
			issuer: "Hackerrank",
			year: 2021,
			href: "https://www.hackerrank.com/certificates/24f89f0f4d0d",
		},
		{
			name: "NodeJS Certificate",
			issuer: "Hackerrank",
			year: 2021,
			href: "https://www.hackerrank.com/certificates/cdae760133a7",
		},
		{
			name: "Problem Solving Certificate",
			issuer: "Hackerrank",
			year: 2021,
			href: "https://www.hackerrank.com/certificates/90e8f3811077",
		},
		{
			name: "Python Certificate",
			issuer: "Hackerrank",
			year: 2021,
			href: "https://www.hackerrank.com/certificates/5e5bb3381a30",
		},
		{
			name: "ReactJS Certificate",
			issuer: "Hackerrank",
			year: 2021,
			href: "https://www.hackerrank.com/certificates/e641c5282518",
		},
	],
};
