import { ProjectData, InterestData } from './types';

export type { Language } from './context/LanguageContext';

// ── Translation shape ────────────────────────────────────────
export interface AppTranslations {
    nav: {
        brand: string;
        about: string;
        projects: string;
        interests: string;
        test: string;
    };
    home: {
        heading: string;
        body: string;
    };
    about: {
        heroTagline: string;
        aboutTitle: string;
        aboutLead: string;
        aboutP2: string;
        aboutP3: string;
        skillsTitle: string;
        skills: Record<string, string[]>;
        educationTitle: string;
        educationDegree: string;
        educationDetails: string;
    };
    projects: {
        heading: string;
        subheading: string;
        githubBtn: string;
        liveDemoBtn: string;
        items: ProjectData[];
    };
    interests: {
        heading: string;
        subheading: string;
        items: InterestData[];
    };
    error: {
        heading: string;
        body: string;
        notFound: string;
    };
}

// ── English ──────────────────────────────────────────────────
const en: AppTranslations = {
    nav: {
        brand: 'Adem Odza',
        about: 'About',
        projects: 'Projects',
        interests: 'Interests',
        test: 'Test',
    },
    home: {
        heading: "Adem Odza's Website",
        body: "I don't have anything to put here yet.",
    },
    about: {
        heroTagline: 'Software Developer · Student · Problem Solver',
        aboutTitle: 'About Me',
        aboutLead:
            "Hi! I'm Adem — a software developer and student with a passion for building " +
            'clean, functional applications that solve real-world problems.',
        aboutP2:
            "I enjoy working across the full stack, from crafting intuitive user interfaces " +
            "to designing backend systems. I'm always looking for opportunities to learn, " +
            'collaborate, and ship things that matter.',
        aboutP3:
            "When I'm not writing code, you'll find me exploring new technologies, working " +
            'on side projects, or diving into one of my hobbies. Feel free to browse around!',
        skillsTitle: 'Skills',
        skills: {
            'Frontend': ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
            'Backend': ['Node.js', 'Python', 'REST APIs'],
            'Tools & Other': ['Git', 'GitHub', 'VS Code', 'Linux'],
        },
        educationTitle: 'Education',
        educationDegree: 'Bachelor of Science in Computer Science',
        educationDetails: 'University Name · Expected Graduation: 20XX',
    },
    projects: {
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
    },
    interests: {
        heading: 'Interests',
        subheading: 'A few things I care about beyond the code editor.',
        items: [
            {
                emoji: '💻',
                title: 'Software Development',
                description:
                    'Building things with code is endlessly rewarding. I love exploring new ' +
                    'frameworks, diving into open-source projects, and sharpening my problem-solving skills.',
            },
            {
                emoji: '🎮',
                title: 'Gaming',
                description:
                    'From story-driven single-player experiences to competitive multiplayer, gaming is ' +
                    'a big part of how I unwind, stay creative, and connect with friends.',
            },
            {
                emoji: '🎵',
                title: 'Music',
                description:
                    'I enjoy a wide range of genres. Music keeps me focused while coding and ' +
                    'inspired when I need a mental reset between sessions.',
            },
            {
                emoji: '📚',
                title: 'Continuous Learning',
                description:
                    "Whether it's a new programming concept, a history deep-dive, or a random " +
                    'Wikipedia rabbit hole — I genuinely love picking up new knowledge.',
            },
            {
                emoji: '🌍',
                title: 'Travel',
                description:
                    'Exploring new places, cultures, and cuisines is something I always look forward to. ' +
                    "Every trip teaches me something I can't learn from a textbook.",
            },
            {
                emoji: '🔧',
                title: 'Tinkering',
                description:
                    'Taking things apart, building little hardware projects, and experimenting with ' +
                    'anything I can get my hands on — software and physical alike.',
            },
        ],
    },
    error: {
        heading: 'Error',
        body: 'There was an error accessing the page:',
        notFound: 'Page Not Found',
    },
};

// ── Placeholder (alt) ────────────────────────────────────────
// Replace the strings below when the target language is decided.
// Short labels use // TERMINAL COMMENT // style.
// Body text uses [SYS]: TRANSLATION PENDING — Lorem ipsum placeholder.
const alt: AppTranslations = {
    nav: {
        brand: 'Adem Odza',
        about: '// ABOUT //',
        projects: '// PROJECTS //',
        interests: '// INTERESTS //',
        test: '// TEST //',
    },
    home: {
        heading: '// ADEM ODZA\'S WEBSITE //',
        body: '[SYS]: CONTENT_TRANSLATION_PENDING...',
    },
    about: {
        heroTagline: '// SOFTWARE DEVELOPER · STUDENT · PROBLEM SOLVER //',
        aboutTitle: '// ABOUT ME //',
        aboutLead:
            '[SYS]: TRANSLATION PENDING — Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        aboutP2:
            '[SYS]: TRANSLATION PENDING — Ut enim ad minim veniam, quis nostrud exercitation ' +
            'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        aboutP3:
            '[SYS]: TRANSLATION PENDING — Duis aute irure dolor in reprehenderit in voluptate ' +
            'velit esse cillum dolore eu fugiat nulla pariatur.',
        skillsTitle: '// SKILLS //',
        skills: {
            '// FRONTEND //': ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
            '// BACKEND //': ['Node.js', 'Python', 'REST APIs'],
            '// TOOLS & OTHER //': ['Git', 'GitHub', 'VS Code', 'Linux'],
        },
        educationTitle: '// EDUCATION //',
        educationDegree: '[SYS]: TRANSLATION PENDING — Bachelor of Science in Computer Science',
        educationDetails: '[SYS]: TRANSLATION PENDING — University Name · Expected Graduation: 20XX',
    },
    projects: {
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
    },
    interests: {
        heading: '// INTERESTS //',
        subheading: '[SYS]: TRANSLATION PENDING — Personal interest modules.',
        items: [
            {
                emoji: '💻',
                title: '// SOFTWARE DEVELOPMENT //',
                description: '[SYS]: TRANSLATION PENDING — Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                emoji: '🎮',
                title: '// GAMING //',
                description: '[SYS]: TRANSLATION PENDING — Ut enim ad minim veniam, quis nostrud exercitation.',
            },
            {
                emoji: '🎵',
                title: '// MUSIC //',
                description: '[SYS]: TRANSLATION PENDING — Duis aute irure dolor in reprehenderit in voluptate.',
            },
            {
                emoji: '📚',
                title: '// CONTINUOUS LEARNING //',
                description: '[SYS]: TRANSLATION PENDING — Excepteur sint occaecat cupidatat non proident.',
            },
            {
                emoji: '🌍',
                title: '// TRAVEL //',
                description: '[SYS]: TRANSLATION PENDING — Sunt in culpa qui officia deserunt mollit anim.',
            },
            {
                emoji: '🔧',
                title: '// TINKERING //',
                description: '[SYS]: TRANSLATION PENDING — Lorem ipsum dolor sit amet, consectetur adipiscing.',
            },
        ],
    },
    error: {
        heading: '// ERROR //',
        body: '[SYS]: PAGE_ACCESS_ERROR —',
        notFound: '// PAGE_NOT_FOUND //',
    },
};

export const translations: Record<string, AppTranslations> = { en, alt };
