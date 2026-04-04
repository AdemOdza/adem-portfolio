export interface HomeTranslations {
    heading: string;
    body: string;
}

const en: HomeTranslations = {
    heading: "Adem Odza's Website",
    body: "I don't have anything to put here yet.",
};

const alt: HomeTranslations = {
    heading: "// ADEM ODZA'S WEBSITE //",
    body: '[SYS]: CONTENT_TRANSLATION_PENDING...',
};

export const translations: Record<string, HomeTranslations> = { en, alt };
