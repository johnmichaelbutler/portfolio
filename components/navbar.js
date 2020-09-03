import { useState } from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const onClick = () => {
  //   setIsOpen(!isOpen);
  // }

  return (
    <header className="fixed inset-0">
      <nav className='flex pl-8 pt-6 justify-between text-2xl'>
        <div className='mx-0'>
          <Link href="/"><a><FontAwesomeIcon icon={faArrowLeft} className='h-10' /></a></Link>
        </div>
        {/* <div>
          <button
            type="button"
            onClick={onClick}
          >
            {isOpen ? (
              <FontAwesomeIcon
                icon={faTimes}
                className='h-5 w-5 text-black hover:text-white focus:text-white focus:outline-none'
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className='h-5 w-5 text-black hover:text-white focus:text-white focus:outline-none'
              />
            )}
          </button>
          <div
            className={cn({
              'hidden': !isOpen,
              'navbarOpen': isOpen
            })}
          >
            <Link href="#skills">
              <a className='block text-black hover:bg-gray-500 font-semibold'>About</a>
            </Link>
            <Link href="/projects">
              <a className='block text-black hover:bg-gray-500 font-semibold'>Projects</a>
            </Link>
            <Link href="/contact">
              <a className='block text-black hover:bg-gray-500 font-semibold'>Contact</a>
            </Link>
          </div>
        </div> */}
      </nav>
    </header>
  )
}

export default Navbar;