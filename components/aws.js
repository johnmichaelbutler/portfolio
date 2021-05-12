const AWSSection = () => {

  const awsSkills = ['Lambda', 'DynamoDB', 'API Gateway', 'S3', 'CloudFormation', 'Route 53', 'EC2', 'Elastic Container Service', 'Elastic Kubernetes Service'].map((skill) => {
    return (
    <li className="flex items-center" key={skill}>
      {skill}
    </li>
  )});

  const awsCerts = ['Solutions Architect - Associate', 'Developer - Associate', 'SysOps Administrator - Associate', 'Cloud Practitioner'].map((cert) => {
    return (
      <li className="flex items-center" key={cert}>
        {cert}
      </li>
    )
  })



  return (
    <div className='h-auto lg:h-screen lg:grid lg:grid-cols-4 animate-fade-in mb-24 lg:mb-0'>
      <div className='lg:col-span-1' />
      <div className='lg:col-span-3 lg:pt-40 '>
        <div className='grid lg:flex items-center justify-around pt-10 lg:pt-20 w-11/12 mx-auto'>
          <div className='flex flex-col content-center items-center'>
            <h1 className='font-garamond text-6xl mb-10 text-primary text-shadow text-center'>AWS  Experience</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center pt-10 lg:pt-20 text-2xl text-gray-800 mx-4'>
              <div className="col-span-1 mx-auto">
                <h2 className="font-bold text-3xl text-shadow">AWS Certifications</h2>
                <ul className="space-y-2">
                  {awsCerts}
                </ul>
              </div>
              <div className="col-span-1 mx-auto">
                <h2 className="font-bold text-3xl text-shadow">AWS Technologies</h2>
                <ul className="space-y-2">
                  {awsSkills}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AWSSection;