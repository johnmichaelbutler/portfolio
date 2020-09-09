import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  return (
    <header className="inset-0 h-0">
      <nav className='flex pl-8 pt-6 justify-between text-2xl'>
        <div className='mx-0 hover:text-primary'>
          <Link href="/"><a><FontAwesomeIcon icon={faArrowLeft} className='h-10' /></a></Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
