import Link from 'next/link';

const Card = (props) => {
  const { title, description, images, id } = props;
  return (
    <div className="relative h-full rounded overflow-hidden col-span-1 mx-auto">
      <img className="w-317 h-56 object-cover object-top" src={`${images[0].original}`} alt={id} />
      <div
        className="
          absolute w-full h-56 transform -translate-y-56 bg-white
          opacity-0 hover:opacity-90 transition-opacity duration-300 rounded
          "
      >
        <div className='grid grid-rows-3'>
            <h1 className='flex text-xl md:-text-2xl text-primary justify-center mt-5 font-extrabold'>{title}</h1>
            <p className='flex text-xl md:-text-2xl text-primary justify-center mt-3'>{description}</p>
          <Link href='/project/[id]' as={`/project/${id}`}>
          <button
            className='flex mt-5 h-8 w-1/2 justify-center text-primary rounded border border-gray-400 transform translate-x-1/2 translate-y-1/2'
          >
            See More
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default Card;