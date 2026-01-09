import { useState } from 'react'
import { Link } from 'react-router-dom'
import GFTLogo from '../../assets/images/gft-logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='font-slackey bg-gray-900 h-20 flex justify-center items-center text-xl sticky top-0 z-50 shadow-md'>
      <div className='flex justify-between items-center w-full max-w-7xl px-12 max-md:px-5'>
        <Link
          to='/'
          className='flex gap-2 text-white cursor-pointer no-underline text-3xl max-md:text-xl font-bold hover:text-indigo-500 transition-colors duration-300'
          onClick={closeMenu}
        >
          <img
            src={GFTLogo}
            alt='GoFishTalent Logo'
            className='h-10 inline-block mr-2'
          />
          <h1 className='font-slackey'>Go Fish! Talent</h1>
        </Link>

        {/* Hamburger Menu Icon - Only visible on mobile */}
        <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
          <div className='w-8 h-6 relative flex flex-col justify-between'>
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            ></span>
          </div>
        </div>

        {/* Navigation Menu */}
        <ul
          className={`
            flex list-none text-center m-0 p-0
            max-md:flex-col max-md:w-full max-md:absolute max-md:top-20 max-md:bg-gray-900 max-md:transition-all max-md:duration-500 max-md:ease-in-out
            ${
              isMenuOpen
                ? 'max-md:left-0 max-md:opacity-100'
                : 'max-md:-left-full max-md:opacity-0'
            }
          `}
        >
          <li className='h-20 flex items-center max-md:w-full max-md:h-16 max-md:border-b max-md:border-gray-800'>
            <Link
              to='/'
              className='text-white no-underline px-4 py-2 h-full flex items-center transition-all duration-300 border-b-4 border-transparent hover:text-indigo-500 hover:border-indigo-500 max-md:w-full max-md:py-6 max-md:justify-center max-md:border-b-0 max-md:hover:bg-gray-800'
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className='h-20 flex items-center max-md:w-full max-md:h-16 max-md:border-b max-md:border-gray-800'>
            <Link
              to='/talent'
              className='text-white no-underline px-4 py-2 h-full flex items-center transition-all duration-300 border-b-4 border-transparent hover:text-indigo-500 hover:border-indigo-500 max-md:w-full max-md:py-6 max-md:justify-center max-md:border-b-0 max-md:hover:bg-gray-800'
              onClick={closeMenu}
            >
              Talent
            </Link>
          </li>
          <li className='h-20 flex items-center max-md:w-full max-md:h-16 max-md:border-b max-md:border-gray-800'>
            <Link
              to='/about'
              className='text-white no-underline px-4 py-2 h-full flex items-center transition-all duration-300 border-b-4 border-transparent hover:text-indigo-500 hover:border-indigo-500 max-md:w-full max-md:py-6 max-md:justify-center max-md:border-b-0 max-md:hover:bg-gray-800'
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className='h-20 flex items-center max-md:w-full max-md:h-16 max-md:border-b max-md:border-gray-800'>
            <Link
              to='/contact'
              className='text-white no-underline px-4 py-2 h-full flex items-center transition-all duration-300 border-b-4 border-transparent hover:text-indigo-500 hover:border-indigo-500 max-md:w-full max-md:py-6 max-md:justify-center max-md:border-b-0 max-md:hover:bg-gray-800'
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
