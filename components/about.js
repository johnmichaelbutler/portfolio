import Link from 'next/link';
const About = () => {
  return (
    <div className='h-screen md:grid md:grid-cols-4 snap-start always-stop'>
      <div className='md:col-span-1' />
      <div className='md:col-span-3 md:pt-40 pt-20'>
        {/* <p className='text-oswald font-bold text-4xl mb-10 text-gray-800 text-center'>About</p> */}
        <div className='grid md:flex items-center justify-around pt-10 md:pt-20 w-11/12'>
          <div className='ml-6 flex flex-col content-center items-center'>
            <p className='font-bold text-2xl text-gray-800 ml-6 text-center'>
              Hi, I'm John, a web developer based in South Texas.
            </p>
            <Link href='/about'>
              <button type='button' className='bg-blue-900 btn cursor-pointer'>
                <a className=''>About Me</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;