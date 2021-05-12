const Experience = () => {
  return (
    <section className='h-auto lg:grid lg:grid-cols-4 animate-fade-in mb-24 lg:mb-0'>
      <div className='lg:col-span-1' />
        <div className='lg:col-span-3 lg:pt-40 '>
          <div className='grid lg:flex items-center justify-around pt-10 lg:pt-20 w-11/12 mx-auto'>
            <div className='flex flex-col content-center items-center'>
              <h1 className='font-garamond text-6xl mb-10 text-primary text-shadow text-center'>Work Experience</h1>
              <div className='grid grid-cols-1  gap-10 items-start justify-center pt-10 lg:pt-20 text-2xl text-gray-800 mx-4'>
                <div className="col-span-1 mx-auto">
                  <p className="font-bold">Harlingen Consolidated Independent School District</p>
                  <p className="font-medium">Special Education Paraprofessional</p>
                  <p className="font-medium">Harlingen, TX<span className="block lg:float-right">09/2017 - Present</span></p>
                  <br />
                  <ul className="list-disc">
                    <li>Advocated for and supported Special Education students who needed more assistance to succeed in school</li>
                    <li>Monitored student data to implement strategies to promote student growth</li>
                    <li>Taught Biology students one-on-one, tailoring my teaching to fit their personal learning style</li>
                    <li>Cooperated with other teachers/paraprofessionals to understand the overall needs of a student across different disciplines</li>
                  </ul>
                </div>
                <div className="col-span-1 mx-auto">
                  <p className="font-bold">Member of the Religious Order of Jehovah's Witnesses</p>
                  <p className="font-medium">Wallkill, NY<span className="block lg:float-right">07/2013 - 07/2017</span></p>
                  <br />
                  <ul className="list-disc ">
                    <li>Full-time volunteer in support of the Preaching Work of Jehovah's Witnesses at the United States Branch Office working in the cleaning and security departments</li>
                    <li>Trained new volunteers on departmental procedures, standards, and techniques</li>
                    <li>Coordinated a 10-person night security crew that secured a facility housing over 1,000 people and a printing facility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience;