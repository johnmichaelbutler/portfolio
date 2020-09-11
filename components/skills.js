const Skills = () => {
  return (
    <div className='h-auto lg:h-screen lg:grid lg:grid-cols-4 mb-24 lg:mb-0 snap-start always-stop'>
      <div className='lg:col-span-1' />
      <div className='lg:col-span-3 pt-10 lg:pt-40'>
        <p className='section-header'>Skills</p>
        <div className='grid md:flex items-center justify-center pt-10 lg:pt-20'>
          <img src='/wd_orange.svg'  className='h-40 lg:h-48 lg:order-2 mx-auto w-1/2' />
          <div className='font-bold text-2xl text-gray-800 lg:order-1 mt-6 lg:ml-20 lg:w-1/2 lg:mx-4 mx-auto'>
            <p className='my-2'>Frontend:
              <span className='font-normal'> React, Redux, Next.js, JavaScript</span>
            </p>
            <p className='my-2'>Styles:
            <span className='font-normal'> CSS, SASS, Tailwind</span>
            </p>
            <p className='my-2'>
              Backend:
              <span className='font-normal'> Node</span>
            </p>
            <p className='my-2'>
              Database:
              <span className='font-normal'> MySQL, MongoDB</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;