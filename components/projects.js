import Card from '../components/card';
import projectsData from '../projectsData'
const Projects = () => {

  const cards = projectsData.map(project => (
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
    <div className='h-auto md:pl-5 md:grid md:grid-cols-4 snap-start always-stop'>
      <div className='md:col-span-1' />
      <div className="md:col-span-3 pt-10">
        <p className='section-header'>
          Projects
        </p>
        <div className='pt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
          {cards}
        </div>
      </div>
    </div>
  )
}

export default Projects;