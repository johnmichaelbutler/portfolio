const Skills = () => {
  return (
    <div className='h-screen md:grid md:grid-cols-4 snap-start always-stop'>
      <div className='md:col-span-1' />
      <div className='md:col-span-3 pt-20 md:pt-40'>
        <p className='text-oswald font-bold text-4xl mb-10 text-gray-800 text-center'>Skills</p>
        <div className='grid md:flex items-center justify-around pt-10 md:pt-20'>
          <img src='/wd_gray.svg'  className='h-40 lg:h-56 md:order-2 ' />
          <div className='font-bold text-2xl text-gray-800 md:order-1 mt-5'>
            <p>Frontend: React, JavaScript</p>
            <p>Styling:CSS/SASS/Tailwind</p>
            <p>Backend: Node</p>
            <p>Cloud: AWS, Google Firestore</p>
            <p>Making Tacos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;