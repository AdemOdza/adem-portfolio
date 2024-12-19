import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='error-text hover-underline items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-jetbrains-sans)]'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}