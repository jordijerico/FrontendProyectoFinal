import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProductCard.css'

function ProductCard({ product }) {


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
      </Card.Body>
      <Card.Text>
        {product.price + "€"}
      </Card.Text>
    </Card>
  );
}

export default ProductCard;