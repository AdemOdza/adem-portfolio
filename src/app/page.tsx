import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-jetbrains-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Work-In-Progress page. Please check back later!
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/adem-odza/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/AdemOdza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
          GitHub
        </a>
      </footer>
    </div>
  );
}
