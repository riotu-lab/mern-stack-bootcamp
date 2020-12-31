import { Container, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <header className='mb-3'>
      <Container fluid>
        <Navbar bg='primary' variant='dark'>
          <Navbar.Brand href='#home'>Notes App</Navbar.Brand>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
