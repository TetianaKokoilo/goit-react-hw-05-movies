
import { Link, useLocation } from 'react-router-dom';
import { Container, CardWrapper, ProductName, Img } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map(movie => {
        const { title, poster_path, id } = movie;
        return (
          <CardWrapper key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt={title}
              />
              <ProductName>{title}</ProductName>
            </Link>
          </CardWrapper>
        );
      })}
    </Container>
  );
};