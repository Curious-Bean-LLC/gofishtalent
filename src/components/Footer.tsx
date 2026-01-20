import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-orange-50 border-t-2 border-[#FF8C42] py-8 mt-12'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          {/* Copyright/Brand */}
          <div className='text-[#2a5a8a] text-sm'>
            <p className='font-slackey text-lg text-[#1e3a5f]'>
              Go Fish! Talent
            </p>
            <p>&copy; {new Date().getFullYear()} All rights reserved</p>
          </div>

          {/* Navigation Links */}
          <nav className='flex flex-wrap justify-center gap-6 text-sm'>
            <Link
              to='/'
              className='text-[#2a5a8a] hover:text-[#FF8C42] transition-colors underline decoration-transparent hover:decoration-[#FF8C42]'
            >
              Home
            </Link>
            <Link
              to='/talent'
              className='text-[#2a5a8a] hover:text-[#FF8C42] transition-colors underline decoration-transparent hover:decoration-[#FF8C42]'
            >
              Talent
            </Link>
            <Link
              to='/tickets'
              className='text-[#2a5a8a] hover:text-[#FF8C42] transition-colors underline decoration-transparent hover:decoration-[#FF8C42]'
            >
              Tickets
            </Link>
            <Link
              to='/about'
              className='text-[#2a5a8a] hover:text-[#FF8C42] transition-colors underline decoration-transparent hover:decoration-[#FF8C42]'
            >
              About
            </Link>
            <Link
              to='/contact'
              className='text-[#2a5a8a] hover:text-[#FF8C42] transition-colors underline decoration-transparent hover:decoration-[#FF8C42]'
            >
              Contact
            </Link>
          </nav>

          {/* Social Links */}
          <div className='text-[#2a5a8a] text-sm'>
            <a
              href='https://www.instagram.com/gofishtalent'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-[#FF8C42] transition-colors underline decoration-transparent hover:decoration-[#FF8C42]'
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
