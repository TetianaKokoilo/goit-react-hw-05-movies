import { Header, Logo, Link, Container } from 'components/App.styled';
import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';

const HeaderComponent = () => {
  return (
    <Container>
      <Header>
        <Logo>
            <span>Filmoteka</span>
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
    </Container>
  );
};

export default HeaderComponent;