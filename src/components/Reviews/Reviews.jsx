import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Api/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReviews(movieId);
        setReviews(data.results);
      } catch (err) {
        return err.message;
      }
    };
    fetchData();
  }, [movieId]);
    
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
export default Reviews;