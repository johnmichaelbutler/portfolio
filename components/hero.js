import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

const Hero = () => {
  return (
    <div className="w-full h-full lg:h-screen lg:pt-10 relative lg:bg-burnt-orange lg:w-1/4 lg:fixed snap-start animate-fade-in-left">
      <h1 className="text-6xl font-lobster text-center text-primary pb-15 text-shadow">
        John Butler
      </h1>
      <img
        className="h-40 md:h-46  xl:h-64 rounded-none mx-auto drop-shadow"
        src="/profile-photo.png"
        alt="John Butler"
      />
      <div>
        <h2 className="font-oswald font-light text-4xl mb-2 mt-2 text-center">
          Web Developer
        </h2>
        <h3 className="font-oswald font-thin text-3xl text-center mx-2">
          Full Stack Developer
        </h3>
        <div className="flex justify-center mx-2">
          <Link href="#contact">
            <button
              type="button"
              className="bg-primary btn inline-flex cursor-pointer transform shadow-lg hover:shadow-2xl hover:-translate-y-1 active:outline-none active:translate-y-0 active:shadow-lg focus:outline-none"
            >
              <FontAwesomeIcon
                icon={faHandshake}
                className="h-6 inline w-10 mr-3 my-auto "
              />
              Let's Work Together
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// active:translate-y-0 active:shadow-lg
// hover:shadow-2xl transform hover:-translate-y-1
