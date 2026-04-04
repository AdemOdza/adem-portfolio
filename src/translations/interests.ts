import { InterestData } from '../types';

export interface InterestsTranslations {
    heading: string;
    subheading: string;
    items: InterestData[];
}

const en: InterestsTranslations = {
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
};

const alt: InterestsTranslations = {
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
};

export const translations: Record<string, InterestsTranslations> = { en, alt };
