const Skills = () => {
  return (
    <div className='h-screen md:grid md:grid-cols-4 snap-start always-stop'>
      <div className='md:col-span-1' />
      <div className='md:col-span-3 pt-20 md:pt-40'>
        <p className='section-header'>Skills</p>
        <div className='grid md:flex items-center justify-center pt-10 md:pt-20'>
          <img src='/wd_orange.svg'  className='h-40 lg:h-48 md:order-2 mx-auto w-1/2' />
          <div className='font-bold text-2xl text-gray-800 md:order-1 mt-5 text-center w-1/2'>
            <p>Frontend:
              <span className='font-normal'> React, JavaScript</span>
            </p>
            <p>Styling:
            <span className='font-normal'> CSS/SASS/Tailwind</span>
            </p>
            <p>
              Backend:
              <span className='font-normal'> Node</span>
            </p>
            <p>
              Databases:
              <span className='font-normal'> MySQL, MongoDB</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;