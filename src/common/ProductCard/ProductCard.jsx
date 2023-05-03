import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProductCard.css'

function ProductCard({ product }) {


  return (
    <Card className='cardProduct' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body className='cardBodyProduct'>
        <Card.Title className='titleCard'>{product.name}</Card.Title>
      </Card.Body>
      <Card.Text className='textcardProduct'>
        {product.price + "€"}
      </Card.Text>
    </Card>
  );
}

export default ProductCard;