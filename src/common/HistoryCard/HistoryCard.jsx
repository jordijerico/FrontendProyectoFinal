import Card from 'react-bootstrap/Card';
import dayjs from 'dayjs';
function HistoryCardInfo( { history , historyProducts}) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{history.status}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{"Fecha: "+ dayjs(history.createdAt).format("DD/MM/YYYY")}</Card.Subtitle>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default HistoryCardInfo;