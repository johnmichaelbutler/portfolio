const Skills = () => {
  return (
    <div className='h-auto lg:h-screen lg:grid lg:grid-cols-4 mb-24 lg:mb-0 snap-start always-stop'>
      <div className='lg:col-span-1' />
      <div className='lg:col-span-3 pt-10 lg:pt-20'>
        <h1 className='section-header'>Skills</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 items-start justify-center pt-10 lg:pt-20 text-2xl text-gray-800 mx-4'>
          <div className='col-span-1 mx-auto'>
            <h2 className='font-bold text-3xl text-shadow'>Frontend</h2>
            <ul className=''>
              <li className='flex items-center'>
                <img src='/icons/react.svg' className='h-6 mr-1' />
                React
              </li>
              <li className='flex items-center'>
                <img src='/icons/redux.svg' className='h-6 mr-1' />
                Redux
              </li>
              <li className='flex items-center'>
                <img src='/icons/next-dot-js.svg' className='h-6 mr-1' />
                Next.js
              </li>
              <li className='flex items-center'>
                <img src='/icons/javascript.svg' className='h-6 mr-1' />
                JavaScript
              </li>
            </ul>
          </div>
          <div className='col-span-1  mx-auto'>
          <h2 className='font-bold text-3xl text-shadow'>Styles</h2>
            <ul className=''>
              <li className='flex items-center'>
                <img src='/icons/css3.svg' className='h-6 mr-1' />
                CSS
              </li>
              <li className='flex items-center'>
                <img src='/icons/sass.svg' className='h-6 mr-1' />
                SASS
              </li>
              <li className='flex items-center'>
                <img src='/icons/tailwindcss.svg' className='h-6 mr-1' />
                Tailwind
              </li>
            </ul>
          </div>
          <div className='col-span-1  mx-auto'>
          <h2 className='font-bold text-3xl text-shadow'>Backend</h2>
            <ul className=''>
              <li className='flex items-center'>
                <img src='/icons/node-dot-js.svg' className='h-6 mr-1' />
                Node
              </li>
              <li className='flex items-center'>
                <img src='/icons/firebase.svg' className='h-6 mr-1' />
                Firebase
              </li>
            </ul>
          </div>
          <div className='col-span-1  mx-auto'>
          <h2 className='font-bold text-3xl text-shadow'>Databases</h2>
            <ul className=''>
              <li className='flex items-center'>
                <img src='/icons/mysql.svg' className='h-6 mr-1' />
                MySQL
              </li>
              <li className='flex items-center'>
                <img src='/icons/mongodb.svg' className='h-6 mr-1' />
                MongoDB
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;