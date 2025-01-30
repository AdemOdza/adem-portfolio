'use client'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useEffect, useState } from 'react';

export const SocialsFooter = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);
    
    return (
        <footer className="socials-footer row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/adem-odza/"
            target="_blank"
            rel="noopener noreferrer"
            >
                {domLoaded && <LinkedInIcon />}
                LinkedIn
            </a>
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/AdemOdza"
            target="_blank"
            rel="noopener noreferrer"
            >
                {domLoaded && <GitHubIcon />}
                GitHub
            </a>
      </footer>
      )
} 

export default SocialsFooter
