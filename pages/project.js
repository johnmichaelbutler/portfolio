import { useRouter } from 'next/router';

const Project = (props) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return <p>Post: {id}</p>
}

export default Project;
