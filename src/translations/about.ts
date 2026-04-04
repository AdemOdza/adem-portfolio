export interface AboutTranslations {
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
}

const en: AboutTranslations = {
    heroTagline: 'Software Developer · Student · Problem Solver',
    aboutTitle: 'About Me',
    aboutLead:
        "Hi! I'm Adem — a software developer and student with a passion for building " +
        'clean, functional applications that solve real-world problems.',
    aboutP2:
        'I enjoy working across the full stack, from crafting intuitive user interfaces ' +
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
};

const alt: AboutTranslations = {
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
};

export const translations: Record<string, AboutTranslations> = { en, alt };
