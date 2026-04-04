import { ProjectData } from '../types';

export interface ProjectsTranslations {
    heading: string;
    subheading: string;
    githubBtn: string;
    liveDemoBtn: string;
    items: ProjectData[];
}

const en: ProjectsTranslations = {
    heading: 'Projects',
    subheading: "A collection of things I've built.",
    githubBtn: 'GitHub',
    liveDemoBtn: 'Live Demo',
    items: [
        {
            title: 'Personal Portfolio',
            description:
                'This very site! Built with React, TypeScript, and React-Bootstrap. A clean, ' +
                'router-driven SPA to showcase projects and share a bit about who I am.',
            tech: ['React', 'TypeScript', 'Bootstrap', 'React Router'],
            githubUrl: 'https://github.com/AdemOdza',
        },
        {
            title: 'Project Two',
            description:
                'A brief description of this project. What problem does it solve? What was ' +
                'the most interesting technical challenge? Replace this with your real project.',
            tech: ['Python', 'Flask', 'SQLite'],
            githubUrl: '#',
        },
        {
            title: 'Project Three',
            description:
                "Another project to highlight. Describe the outcome, what you learned, or " +
                "anything that makes it stand out. Add a live link if it's deployed.",
            tech: ['JavaScript', 'Node.js', 'Express'],
            githubUrl: '#',
            liveUrl: '#',
        },
    ],
};

const alt: ProjectsTranslations = {
    heading: '// PROJECTS //',
    subheading: '[SYS]: TRANSLATION PENDING — Collection loading...',
    githubBtn: '// GITHUB //',
    liveDemoBtn: '// LIVE DEMO //',
    items: [
        {
            title: '// PERSONAL PORTFOLIO //',
            description:
                '[SYS]: TRANSLATION PENDING — Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'React, TypeScript, React-Bootstrap.',
            tech: ['React', 'TypeScript', 'Bootstrap', 'React Router'],
            githubUrl: 'https://github.com/AdemOdza',
        },
        {
            title: '// PROJECT TWO //',
            description:
                '[SYS]: TRANSLATION PENDING — Ut enim ad minim veniam, quis nostrud exercitation ' +
                'ullamco laboris nisi ut aliquip.',
            tech: ['Python', 'Flask', 'SQLite'],
            githubUrl: '#',
        },
        {
            title: '// PROJECT THREE //',
            description:
                '[SYS]: TRANSLATION PENDING — Duis aute irure dolor in reprehenderit in voluptate ' +
                'velit esse cillum dolore eu fugiat.',
            tech: ['JavaScript', 'Node.js', 'Express'],
            githubUrl: '#',
            liveUrl: '#',
        },
    ],
};

export const translations: Record<string, ProjectsTranslations> = { en, alt };
