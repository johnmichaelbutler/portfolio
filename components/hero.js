import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

const Hero = () => {
  return (
  <div className="w-full h-screen md:pt-10 relative md:bg-burnt-orange md:w-1/4 md:fixed snap-start animate-fade-in-left">
    <h1 className="text-6xl font-lobster text-center text-primary pb-20">
      John Butler
    </h1>
    <img className="h-40 md:h-46 lg:h-56 xl:h-64 rounded-none mx-auto" src="/profile-photo.png" />
    <div>
      <h2 className='font-oswald font-light text-4xl mb-2 mt-2 text-center'>
        Web Developer
      </h2>
      <h3 className='font-oswald font-thin text-3xl text-center'>
        Front End Developer / Occasional Back End Developer / Aspiring Cloud Developer
      </h3>
      <div className='flex justify-center'>
        <Link href='#contact'>
          <button type='button' className='bg-primary btn inline-flex cursor-pointer '>
            <FontAwesomeIcon icon={faHandshake} className="h-6 inline w-10 mr-3 my-auto " />
            Let's Work Together
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Hero;