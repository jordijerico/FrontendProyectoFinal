import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ product }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.price + "€"} 
        </Card.Text>
        <Button variant="primary">Más detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;