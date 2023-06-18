import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
export default function Navbar() {
  return (
    <nav className='bg-slate-600 sticky p-4 top-0 drop-shadow-xl z-10'>
      <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <h1 className='text-3xl font-bold text-white place-content-center mb-2 md:mb-0 grid'>
          <Link
            href='/'
            className='text-white/90 no-underline hover:text-white'
          >
            Shreyas Nidugala
          </Link>
        </h1>
        <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl'>
          <Link
            className='text-white/90 hover:text-white'
            href='https://github.com/saeyesss'
          >
            <FaGithub />
          </Link>
          <Link
            className='text-white/90 hover:text-white'
            href='https://www.linkedin.com/in/saeyesss/'
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </nav>
  );
}
