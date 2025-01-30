// import Image from 'next/image'
// import myImage from '../public/portrait.jpg'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-jetbrains-sans)]">
     
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        {/* Main text of the page */}
        <div className="col-start-20">
         <p className="col-start-3 row-start-2" >Hi, I&apos;m Adem!</p>
         <p className="col-span-3 col-start-2 row-start-3" >I&apos;m a Software Engineer that focuses mostly on Back-End work and created this website to teach myself Front-End development.</p>
        </div>

        {/* Image, and possibly later a 3d model with three js */}
        <div className="grid grid-cols-4 grid-rows-3 gap-8">
          {/* <Image 
            className="col-span-2 row-span-2 col-start-1 row-start-1"
            src={myImage}
            alt="Me"
            objectFit='cover'
            style={{
              width: '50%',
              height: 'auto',
            }}
          /> */}
        </div>
      </main>
    </div>
  );
}
