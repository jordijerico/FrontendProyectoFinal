import Card from 'react-bootstrap/Card';
import './ProductCard.css'
import { productDetail } from '../../services/apiCalls';
import { useDispatch } from 'react-redux';
import { addChoosen } from '../../pages/detailSlice';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productDetailed = async () => {
    try {
      const productChoosen = await productDetail(product.id);

      dispatch(addChoosen({ choosenObject: productChoosen }));

      setTimeout(() => {
        navigate("/productdetail")
      }, 1000);
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