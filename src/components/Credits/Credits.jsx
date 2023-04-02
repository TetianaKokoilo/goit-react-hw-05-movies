import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'Api/Api';
import { Suspense } from 'react';

export const Credits = () => {
  const { movie } = useParams();
  const [cast, setCast] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCredits(movie);
        setCast(data.cast);
      } catch (err) {
        return err.message;
      }
      };
      fetchData();
  }, [movie]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <h3>Cast</h3>
      {cast.map(({ id, original_name, profile_path, character }) => (
        <div key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
            alt={''}
          />
          {/* <p>
            {character} --- {original_name}
          </p> */}
        </div>
      ))}
    </>
  );
};
