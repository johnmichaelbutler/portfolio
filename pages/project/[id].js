import { useRouter } from 'next/router';
import Head from 'next/head';
import {projectsData, getProjectData, getAllProjectIds } from '../../projectsData';
import MyGallery from '../../components/myGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/navbar';

const Project = ({project}) => {
  const {title, images, description, webLink, githubLink, summary, id} = project[0];

  return (
    <>
      <Head>
        <title>John Butler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='md:grid md:grid-cols-2 mt-20'>
        <div className='md:col-span-1 md:max-w-full max-w-3/4 mx-auto my-0 w-full'>
          <MyGallery images={images} />
        </div>
        <div className='md:col-span-1'>
          <h1 className='text-center font-extrabold text-4xl text-primary mt-6'>{title}</h1>
          <h2 className='font-bond text-3xl text-center text-primary'>{description}</h2>
          <div className='flex justify-around my-6'>
              <a href={`${webLink}`} target="_blank">
                <FontAwesomeIcon icon={faDesktop} className='h-10 mx-auto hover:text-gray-600 text-primary' />
                <span>See The Site</span>
              </a>
              <a href={`${githubLink}`} target="_blank" >
                <FontAwesomeIcon icon={faGithub} className='h-10 mx-auto hover:text-gray-600 text-primary' />
                <span>See the Code</span>
              </a>
          </div>
          <div className='w-9/12 mx-auto my-12'>
            <p className='text-primary text-xl'>{summary}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project;

export async function getStaticProps({params}) {
  const project = getProjectData(params.id);
  return {
    props: {
      project
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false
  }
}