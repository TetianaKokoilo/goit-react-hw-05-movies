import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Api/Api';

export const Reviews = () => {
  const { movie } = useParams();
  const [reviews, setReviews] = useState([]);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReviews(movie);
        setReviews(data.results);
      } catch (err) {
        return err.message;
      }
    };
    fetchData();
  }, [movie]);
    
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      {reviews.map(({ author, content, id }) => (
        <div key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
        </div>
      ))}
    </>
  );
};
