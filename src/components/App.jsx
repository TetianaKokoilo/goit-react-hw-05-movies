import { Route, Routes } from 'react-router-dom';
import { Movies } from '../pages/Movies';
import { Home } from '../pages/Home';
import { Container, Header, Logo, Link } from './App.styled';
import { MovieDetails } from 'pages/MovieDetails';
import { Credits } from './Credits/Credits';
import { Reviews } from './Reviews/Reviews';


export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>Filmoteka</Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movie" element={<MovieDetails />}>
          <Route path="/movies/:movie/cast" element={<Credits />} />
          <Route path="/movies/:movie/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Container>
  );
};
