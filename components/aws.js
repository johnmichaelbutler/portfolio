const AWSSection = () => {
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
                  <li className="flex items-center">
                    Solutions Architect - Associate
                  </li>
                  <li className="flex items-center">
                    Developer - Associate
                  </li>
                  <li className="flex items-center">
                    SysOps Administrator - Associate
                  </li>
                  <li className="flex items-center">
                    Cloud Practitioner
                  </li>
                </ul>
              </div>
              <div className="col-span-1 mx-auto">
                <h2 className="font-bold text-3xl text-shadow">AWS Technologies</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    Lambda
                  </li>
                  <li className="flex items-center">
                    DynamoDB
                  </li>
                  <li className="flex items-center">
                    API Gateway
                  </li>
                  <li className="flex items-center">
                    S3
                  </li>
                  <li className="flex items-center">
                    CloudFormation
                  </li>
                  <li className="flex items-center">
                    Route 53
                  </li>
                  <li className="flex items-center">
                    EC2
                  </li>
                  <li className="flex items-center">
                    CloudWatch
                  </li>
                  <li className="flex items-center">
                    IAM
                  </li>
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