import Card from 'react-bootstrap/Card';
import dayjs from 'dayjs';
function HistoryCardInfo( { history }) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{"Pedido nº "+history.id}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{"Estado: "+ history.status}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{"Fecha: "+ dayjs(history.createdAt).format("DD/MM/YYYY")}</Card.Subtitle>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default HistoryCardInfo;