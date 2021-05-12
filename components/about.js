const About = () => {
  return (
    <div className='h-auto lg:h-screen lg:grid lg:grid-cols-4 animate-fade-in mb-24 lg:mb-0'>
      <div className='lg:col-span-1' />
      <div className='lg:col-span-3 lg:pt-20 '>
        <div className='grid lg:flex items-center justify-around pt-10 lg:pt-20 w-11/12 mx-auto'>
          <div className='flex flex-col content-center items-center'>
            <h1 className='font-garamond text-6xl mb-10 text-primary text-shadow'>Hi, I'm John</h1>
            <p className='font-bold text-xl md:text-2xl text-primary text-center'>
              I am a Highly driven and passionate Cloud Software Engineer and Solutions Architect specializing  in serverless and cloud native development using Amazon Web Services (AWS). I have experience in full-stack web development using the MERN stack and Microservices event-driven architecture. With interests in many aspects of programming, including Cloud Computing, Web Development, Machine Learning, and AI, I love learning new things and deepening my skill set.
              <br /><br />
              I am an experienced public speaker with strong verbal, interpersonal, and written communication skills and a logical approach to problem-solving. By utilizing best practices and the latest features AWS has to offer, I am ready to contribute to the growth and value of a company.
            </p>
            <div className='flex '>
              <a href="/JohnButlerResume.pdf" target="_blank" rel="noopener">
                <button type='button' className='bg-primary btn cursor-pointer transform shadow-lg hover:shadow-2xl hover:-translate-y-1 active:outline-none active:translate-y-0 active:shadow-lg focus:outline-none'>
                  Resume (PDF)
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;