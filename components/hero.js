import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className="px-2 md:px-0 w-full h-full lg:h-screen lg:pt-10 relative lg:bg-burnt-orange lg:w-1/4 lg:fixed snap-start animate-fade-in-left">
      <h1 className="text-6xl font-garamond text-center text-primary pb-15 text-shadow">
        John Butler
      </h1>
      <img
        className="h-40 md:h-46 rounded-none mx-auto drop-shadow"
        src="/profile-photo.png"
        alt="John Butler"
      />
      <div>
        <h2 className="font-oswald font-light text-4xl lg:text-3xl xl:text-4xl mb-2 mt-2 text-center">
          AWS Cloud Developer & Solutions Architect Associate
        </h2>
        <h3 className="font-oswald font-light text-2xl mb-2 mt-2 text-center">
          Harlingen, TX
        </h3>
        <div className="flex justify-center lg:flex-col lg:items-center ">
          <a href="https://blog.johnbutler.dev">
            <button
              type="button"
              className="bg-primary mr-5 lg:mr-0 lg:mb-0 btn inline-flex cursor-pointer transform shadow-lg hover:shadow-2xl hover:-translate-y-1 active:outline-none active:translate-y-0 active:shadow-lg focus:outline-none"
            >
            <FontAwesomeIcon
                icon={faPencilAlt}
                className="h-6 inline w-10 mr-3 my-auto "
              />
              Check Out My Blog
            </button>
          </a>
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