const About = () => {
  return (
    <div className='h-screen md:grid md:grid-cols-4 snap-start always-stop'>
      <div className='col-span-1' />
      <div className='col-span-3 md:pt-40 pt-20'>
        <p className='text-oswald font-bold text-4xl mb-10 text-gray-800 text-center'>About</p>
        <div className='grid md:flex items-center justify-around md:pt-20 pt-10'>
          <img src='/about_orange.svg' className='h-40 lg:h-56' />
          <div className='font-bold text-2xl text-gray-800'>
            <p>A baller since birth</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About;