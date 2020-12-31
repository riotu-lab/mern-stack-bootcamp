import { Card } from 'react-bootstrap';
function Note(props) {
  return (
    <Card bg='primary' text='white' className='mt-3'>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>{props.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Note;
