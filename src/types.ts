/** Shared data-shape interfaces used by both translations.ts and UI components. */

export interface ProjectData {
    title: string;
    description: string;
    tech: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export interface InterestData {
    emoji: string;
    title: string;
    description: string;
}
