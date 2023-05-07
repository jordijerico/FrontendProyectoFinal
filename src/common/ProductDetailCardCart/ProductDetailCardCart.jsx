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

    const finishBuy = () => {
        try {
            dispatch(addChoosen({ choosenObject: {} }));
            navigate("/")

        } catch (error) {
            console.log(error);
        }

    }
console.log(productDet.choosenObject.data);

    return (
        <Container fluid>
            <div className='titleCart'>CARRITO</div>


            {productDet.choosenObject.data === undefined ? (
                <>
                    <div>Todavía no hay productos en tu carrito</div>
                </>



            ) : (
                <>



                    <Card className='cardProduct2Cart' >
                        <Card.Img className='cardProductCart2image' variant="top" src={product?.ProductCart?.choosenObject?.data?.data?.image} />
                        <Card.Body className='cardProduct2Cartbody'>

                            <Card.Title className='cardProduct2Carttitle'>{product?.ProductCart?.choosenObject?.data?.data?.name}</Card.Title>
                            <Card.Text>
                                {"Material: " + product?.ProductCart?.choosenObject?.data?.data?.material} <br />
                            </Card.Text>
                            <Card.Text>
                                {product?.ProductCart?.choosenObject?.data?.data?.description}<br />
                            </Card.Text>
                            <Card.Text>
                                {"Precio: " + product?.ProductCart?.choosenObject?.data?.data?.price + " €"}
                            </Card.Text>

                        </Card.Body>

                    </Card>

                    <div className='divcenterbtnAdd'>
                        <div className='BtnFinishShop' onClick={() => finishBuy()}>
                            COMPRAR

                        </div>
                    </div>

                </>
            )

            }



        </Container>
    );
}


