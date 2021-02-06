const About = () => {
  return (
    <div className='h-auto lg:h-screen lg:grid lg:grid-cols-4 animate-fade-in mb-24 lg:mb-0'>
      <div className='lg:col-span-1' />
      <div className='lg:col-span-3 lg:pt-40 '>
        <div className='grid lg:flex items-center justify-around pt-10 lg:pt-20 w-11/12 mx-auto'>
          <div className='flex flex-col content-center items-center'>
            <h1 className='font-garamond text-6xl mb-10 text-primary text-shadow'>Hi, I'm John</h1>
            <p className='font-bold text-xl md:text-2xl text-primary text-center'>
              I am an AWS DevOps Engineer and Solutions Architect with a focus on cloud native and serverless development, infrastructure automation and cloud security. I also have experience in full-stack web development using the MERN stack and Microservices architecture. By utilizing best practices and the latest features AWS has to offer, I am ready to contribute to the growth and value of a company.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;