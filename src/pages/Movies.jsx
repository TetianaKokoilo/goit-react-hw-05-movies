import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getKeyWord } from 'Api/Api';
import { Form, Input, Button} from './Movies.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get('name') ?? '';

  const onHandleSubmit = e => {
    e.preventDefault();
    setSearchParams({ name: name });
    setName('');
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  useEffect(() => {
    const fetchByName = async () => {
      try {
        const { results } = await getKeyWord(searchName);
        setMovies(results);
      } catch (err) {
        return err.message;
      }
    };
    fetchByName();
  }, [searchName]);

  return (
    <div>
      <Form onSubmit={onHandleSubmit}>
        <Input type="text" value={name} onChange={handleChange} />
        <Button type="submit">Search</Button>
      </Form>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;