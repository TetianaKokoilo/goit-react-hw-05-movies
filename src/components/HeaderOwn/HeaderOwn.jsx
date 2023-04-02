import { Suspense } from 'react';
import { Container, Header, Logo, Link } from '../App.styled';
import { Outlet } from 'react-router-dom';

const HeaderOwn = () => {
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
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default HeaderOwn;
