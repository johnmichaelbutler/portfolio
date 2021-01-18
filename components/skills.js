const Skills = () => {
  return (
    <div className="h-auto lg:h-screen lg:grid lg:grid-cols-4 mb-24 lg:mb-0 snap-start always-stop">
      <div className="lg:col-span-1" />
      <div className="lg:col-span-3 pt-10 lg:pt-20">
        <h1 className="section-header reflect-small">Skills</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 items-start justify-center pt-10 lg:pt-20 text-2xl text-gray-800 mx-4">
          <div className="col-span-1 mx-auto">
            <h2 className="font-bold text-3xl text-shadow">Languages</h2>
            <ul className="">
              <li className="flex items-center">
                <img src="/icons/js.svg" className="h-6 mr-1" alt="javascript" />
                JavaScript
              </li>
              <li className="flex items-center">
                <img src="/icons/ts.svg" className="h-6 mr-1" alt="typescript" />
                TypeScript
              </li>
              <li className="flex items-center">
                <img
                  src="/icons/python.svg"
                  className="h-6 mr-1"
                  alt="python"
                />
                Python
              </li>
            </ul>
          </div>
          <div className="col-span-1  mx-auto">
            <h2 className="font-bold text-3xl text-shadow text-center">AWS</h2>
            <ul className="">
              <li className="flex items-center text-center">
                Many services including...
              </li>
              <li className="flex items-center">
                <img src="/icons/lambda.svg" className="h-6 mr-1" alt="lambda" />
                Lambda
              </li>
              <li className="flex items-center">
                <img src="/icons/dynamodb.svg" className="h-6 mr-1" alt="dynamodb" />
                DynamoDB
              </li>
              <li className="flex items-center">
                <img
                  src="/icons/cloudformation.svg"
                  className="h-6 mr-1"
                  alt="cloudformation"
                />
                CloudFormation
              </li>
            </ul>
          </div>
          <div className="col-span-1  mx-auto">
            <h2 className="font-bold text-3xl text-shadow">Web Dev</h2>
            <ul className="">
              <li className="flex items-center">
                <img
                  src="/icons/node-dot-js.svg"
                  className="h-6 mr-1"
                  alt="node"
                />
                Node
              </li>
              <li className="flex items-center">
                <img
                  src="/icons/react.svg"
                  className="h-6 mr-1"
                  alt="react"
                />
                React/Redux
              </li>
              <li className="flex items-center">
                <img
                  src="/icons/next-dot-js.svg"
                  className="h-6 mr-1"
                  alt="next.js"
                />
                Next.JS
              </li>
              <li className="flex items-center">
              <img
                  src="/icons/tailwindcss.svg"
                  className="h-6 mr-1"
                  alt="tailwind"
                />
                TailwindCSS
              </li>
            </ul>
          </div>
          <div className="col-span-1  mx-auto">
            <h2 className="font-bold text-3xl text-shadow">Databases</h2>
            <ul className="">
              <li className="flex items-center">
                <img src="/icons/mysql.svg" className="h-6 mr-1" alt="mysql" />
                MySQL
              </li>
              <li className="flex items-center">
                <img
                  src="/icons/mongodb.svg"
                  className="h-6 mr-1"
                  alt="mongodb"
                />
                MongoDB
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
