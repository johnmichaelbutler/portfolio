import Card from '../components/card';
import {projectData} from '../projectsData';
const Projects = () => {
    const cards = projectData.map(project => (
        <Card
          title={project.title}
          description={project.description}
          key={project.id}
          id={project.id}
          images={project.images}
          webLink={project.webLink}
          githubLink={project.githubLink}
        />
      )
    );

  return (
    <div className='h-auto lg:h-screen lg:pl-5 md:grid lg:grid-cols-4 snap-start always-stop mb-8 lg:mb-0'>
      <div className='lg:col-span-1' />
      <div className="lg:col-span-3 pt-10">
        <p className='section-header'>
          Web Development Projects
        </p>
        <div className='pt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
          {cards}
        </div>
      </div>
    </div>
  )
}

export default Projects;