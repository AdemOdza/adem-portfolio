export interface ErrorTranslations {
    heading: string;
    body: string;
    notFound: string;
}

const en: ErrorTranslations = {
    heading: 'Error',
    body: 'There was an error accessing the page:',
    notFound: 'Page Not Found',
};

const alt: ErrorTranslations = {
    heading: '// ERROR //',
    body: '[SYS]: PAGE_ACCESS_ERROR —',
    notFound: '// PAGE_NOT_FOUND //',
};

export const translations: Record<string, ErrorTranslations> = { en, alt };
