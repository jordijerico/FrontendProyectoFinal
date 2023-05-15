import React from 'react'
import Card from 'react-bootstrap/Card';
import "./ProductDetailCardCart.css"
import { useDispatch, useSelector } from 'react-redux';
import { addProductCart } from '../../pages/shoppingcartSlice';
import { addChoosen, productData } from '../../pages/detailSlice';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const ProductDetailCardCart = ({ product }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productDet = useSelector(productData);


    return (
        <Container fluid>



            {productDet.choosenObject.data === undefined ? (
                <>
                    <div>Todavía no hay productos en tu carrito</div>
                </>



            ) : (
                <>



                    <Card className='cardProduct2Cart' >
                        <Card.Img className='cardProductCart2image' variant="top" src={product.image} />
                        <Card.Body className='cardProduct2Cartbody'>

                            <Card.Title className='cardProduct2Carttitle'>{product.name}</Card.Title>
                            <Card.Text>
                                {"Material: " + product.material} <br />
                            </Card.Text>
                            <Card.Text>
                                {product.description}<br />
                            </Card.Text>
                            <Card.Text>
                                {"Precio: " + product.price + " €"}
                            </Card.Text>

                        </Card.Body>

                    </Card>


                </>
            )

            }

        </Container>
    );
}


