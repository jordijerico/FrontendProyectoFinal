import Card from 'react-bootstrap/Card';
import './ProductCard.css'
import { productDetail } from '../../services/apiCalls';

function ProductCard({ product }) {

  const productDetailed = async () => {
    try {
       const productillo =  await productDetail(product.id);

    } catch (error) {
        console.log(error)
    }
}



  return (
    <Card className='cardProduct' style={{ width: '18rem', cursor: 'pointer' }} onClick={() => productDetailed()} >
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