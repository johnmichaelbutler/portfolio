import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  projectsData,
  getProjectData,
  getAllProjectIds,
} from '../../projectsData';
import MyGallery from '../../components/myGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/navbar';

const Project = ({ project }) => {
  const {
    title,
    images,
    description,
    webLink,
    githubLink,
    summary,
    id,
  } = project[0];

  return (
    <>
      <Head>
        <title>John Butler</title>
        <html lang="en" />
        <meta
          name="description"
          content="An example of a project created by John Butler"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="lg:grid lg:grid-cols-2 mt-20">
        <div className="lg:col-span-1 lg:max-w-full max-w-3/4 mx-auto my-0 w-full">
          <MyGallery images={images} />
        </div>
        <div className="lg:col-span-1">
          <h1 className="text-center font-extrabold text-4xl text-primary mt-6">
            {title}
          </h1>
          <h2 className="font-bond text-3xl text-center text-primary">
            {description}
          </h2>
          <div className="flex justify-around my-6 text-2xl">
            <a href={`${webLink}`} target="_blank">
              <FontAwesomeIcon
                icon={faDesktop}
                className="mx-auto hover:text-gray-600 text-primary mr-3"
              />
              <span>See The Site</span>
            </a>
            <a href={`${githubLink}`} target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="mx-auto hover:text-gray-600 text-primary mr-3"
              />
              <span className="t">See the Code</span>
            </a>
          </div>
          <div className="w-9/12 mx-auto my-12">
            <p className="text-primary text-xl">{summary}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

export async function getStaticProps({ params }) {
  const project = getProjectData(params.id);
  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}
