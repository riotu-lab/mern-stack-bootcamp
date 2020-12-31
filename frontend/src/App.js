import { useEffect, useState } from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const { data } = await axios.get('/notes');
      setNotes(data);
    };

    getNotes();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Container>
          <Row>
            {notes.map((note) => {
              return (
                <Col lg={4} md={6} sm={12}>
                  <Note title={note.title} content={note.content} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
