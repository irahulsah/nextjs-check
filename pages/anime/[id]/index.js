import { useRouter } from "next/router";
import { getAnimeById, deleteMovieById } from "../../../resourses/animeData";
import Link from 'next/link';
const anime = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { anime } = props;
  const deleteHandler = (id) => {
    deleteMovieById(id).then((res) => {
      router.push("/");
    });
  };
  return (
    <div className='container text-box'>
      <div className='jumbotron' style={{ marginTop: "100px" }}>
        <h1 className=' display-4'>{anime.name}</h1>
        <p className='lead'>{anime.description}</p>
        <hr className='my-4' />
        <p>{anime.genre}</p>
        <button href='#' className='btn btn-primary btn-lg' role='button'>
          Read More
        </button>
        <button
          href='#'
          onClick={() => deleteHandler(id)}
          className='btn btn-danger btn-lg ml-1'
          role='button'
        >
          Delete
        </button>
        <Link href="/anime/[id]/edit-movie" as={`/anime/${id}/edit-movie`}>
        <button
          className='btn btn-warning btn-lg ml-1'
          role='button'>
          Edit
        </button>
        </Link>
      </div>
    </div>
  );
};
anime.getInitialProps = async ({ query }) => {
  const anime = await getAnimeById(query.id);
  return {
    anime,
  };
};
export default anime;
