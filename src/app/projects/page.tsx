
export default function Home() {
  return (
    <div>
        <main className="body-text p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-jetbrains-sans)]">
            <p> Here are some of my projects: </p>
            <ul className={"list-disc list-inside"}>
                <li className="navbar-link">
                    <a href="/projects/portfolio">This Website</a>
                </li>
                <li className="navbar-link hover-underline">
                    <a href="/projects/van-gogh">AI Van Gogh Style Transfer</a>
                </li>
                {/* <li>
                    <a href="/projects/theksi">Project Theksi</a>
                </li> */}
            </ul>
        </main>
    </div>
  );
}
