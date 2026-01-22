import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-orange-50 border-t-2 border-[var(--primary)] py-8 mt-12'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          {/* Copyright/Brand */}
          <div className='text-[var(--secondary)] text-sm'>
            <p className='font-slackey text-lg text-[var(--tertiary)]'>
              Go Fish! Talent
            </p>
            <p>&copy; {new Date().getFullYear()} All rights reserved</p>
          </div>

          {/* Navigation Links */}
          <nav className='flex flex-wrap justify-center gap-6 text-sm'>
            <Link
              to='/'
              className='text-[var(--secondary)] hover:text-[var(--primary)] transition-colors underline decoration-transparent hover:decoration-[var(--primary)]'
            >
              Home
            </Link>
            <Link
              to='/talent'
              className='text-[var(--secondary)] hover:text-[var(--primary)] transition-colors underline decoration-transparent hover:decoration-[var(--primary)]'
            >
              Talent
            </Link>
            <Link
              to='/tickets'
              className='text-[var(--secondary)] hover:text-[var(--primary)] transition-colors underline decoration-transparent hover:decoration-[var(--primary)]'
            >
              Tickets
            </Link>
            <Link
              to='/about'
              className='text-[var(--secondary)] hover:text-[var(--primary)] transition-colors underline decoration-transparent hover:decoration-[var(--primary)]'
            >
              About
            </Link>
            <Link
              to='/contact'
              className='text-[var(--secondary)] hover:text-[var(--primary)] transition-colors underline decoration-transparent hover:decoration-[var(--primary)]'
            >
              Contact
            </Link>
          </nav>

          {/* Social Links */}
          <div className='text-[var(--secondary)] text-xl'>
            <a
              href='https://www.instagram.com/gofishtalent'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-[var(--primary)] transition-colors'
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
