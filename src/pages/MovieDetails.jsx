import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { getMovieById } from 'Api/Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovieById(movieId);
        setMovies(data);
      } catch (err) {
        return err.message;
      }
    };
    fetchData();
  }, [movieId]);
  return (
    <main>
      <Link to={location.state?.from || '/'}>Go Back</Link>
      {movies && (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
              alt={movies.title}
            />
          </div>
          <h2>{movies.title}</h2>
          <p>Overview</p>
          <p>{movies.overview}</p>
          <p>Rating: {movies.vote_average}</p>

          <div>
            Additional information
            <ul>
              <li>
                <Link
                  to={`/movies/${movieId}/cast`}
                  state={{ from: location.state?.from || '/movies' }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={`/movies/${movieId}/reviews`}
                  state={{ from: location.state?.from || '/movies' }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;