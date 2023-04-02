import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Movies = lazy(() => import('../pages/Movies'));
const Home = lazy(() => import('../pages/Home'));
const HeaderOwn = lazy(() => import('./HeaderOwn/HeaderOwn'))
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Credits = lazy(() => import('./Credits/Credits'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HeaderOwn />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movie" element={<MovieDetails />}>
          <Route path="movies/:movie/cast" element={<Credits />} />
          <Route path="movies/:movie/reviews" element={<Reviews />} />
          </Route>
          </Route>
      </Routes>
  );
};
