const Education = () => {
  return (
    <section className='h-auto lg:h-3/4 lg:grid lg:grid-cols-4 animate-fade-in mb-24 lg:mb-0'>
      <div className='lg:col-span-1' />
      <div className='lg:col-span-3 lg:pt-40 '>
        <div className='grid lg:flex items-center justify-around pt-10 lg:pt-20 w-11/12 mx-auto'>
          <div className='flex flex-col content-center items-center'>
            <h1 className='font-garamond text-6xl mb-10 text-primary text-shadow text-center'>Education</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center pt-10 lg:pt-20 text-2xl text-gray-800 mx-4'>
              <div className="col-span-1 mx-auto">
                <h2 className="font-bold text-3xl text-shadow">Associate of Science - Biology</h2>
                <p>Received: 09/2012</p>
                <p>South Texas College</p>
                <p>McAllen, Texas</p>
              </div>
              <div className="col-span-1 mx-auto">
                <h2 className="font-bold text-3xl text-shadow">La Feria High School</h2>
                <p>Received: 05/2011</p>
                <p>Salutatorian</p>
                <p>La Feria, Texas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Education;