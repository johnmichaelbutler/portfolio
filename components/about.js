const About = () => {
  return (
    <div className='h-screen md:grid md:grid-cols-4 snap-start always-stop animate-fade-in'>
      <div className='md:col-span-1' />
      <div className='md:col-span-3 md:pt-40 pt-10'>
        {/* <p className='text-oswald font-bold text-4xl mb-10 text-gray-800 text-center'>About</p> */}
        <div className='grid md:flex items-center justify-around pt-10 md:pt-20 w-11/12'>
          <div className='ml-6 flex flex-col content-center items-center'>
            <h1 className='font-lobster font-extrabold text-6xl mb-5 text-primary'>Hi, I'm John</h1>
            <p className='font-bold text-2xl text-primary text-center'>
              I am a web developer based in South Texas with an interest in simple and responsive websites. With a background in long-term volunteer work and education, I understand the role of technology isn't for technology's sake, but for people. Greater than my passion for programming is my desire to connect and help people solve their problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;