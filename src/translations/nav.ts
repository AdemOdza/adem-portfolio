export interface NavTranslations {
    brand: string;
    about: string;
    projects: string;
    interests: string;
    test: string;
}

const en: NavTranslations = {
    brand: 'Adem Odza',
    about: 'About',
    projects: 'Projects',
    interests: 'Interests',
    test: 'Test',
};

const alt: NavTranslations = {
    brand: 'Adem Odza',
    about: '// ABOUT //',
    projects: '// PROJECTS //',
    interests: '// INTERESTS //',
    test: '// TEST //',
};

export const translations: Record<string, NavTranslations> = { en, alt };
