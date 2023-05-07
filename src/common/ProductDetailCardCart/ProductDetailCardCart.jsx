import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import "./ProductDetailCardCart.css"
import { useDispatch, useSelector } from 'react-redux';
import { addProductCart } from '../../pages/shoppingcartSlice';
import { productData } from '../../pages/detailSlice';
import { Container } from 'react-bootstrap';

export const ProductDetailCardCart = ({ product }) => {

    const productillo = useSelector(productData);

    const dispatch = useDispatch();
    const addProductToCart = () => {
        try {
            dispatch(addProductCart({ ProductCart: productillo }));

        } catch (error) {
            console.log(error);
        }

    }



    return (
        <Container fluid>
            <div>CARRITO</div>
            <Card className='cardProduct2' style={{ width: '18rem' }}>
                <Card.Img className='cardProduct2image' variant="top" src={product.ProductCart.choosenObject.data.data.image} />
                <Card.Body className='cardProduct2ibody'>

                    <Card.Title className='cardProduct2ititle'>{product.ProductCart.choosenObject.data.data.name}</Card.Title>
                    <Card.Text>
                        {"Material: " + product.ProductCart.choosenObject.data.data.material} <br />
                    </Card.Text>
                    <Card.Text>
                        {product.ProductCart.choosenObject.data.data.description}<br />
                    </Card.Text>
                    <Card.Text>
                        {"Precio: " + product.ProductCart.choosenObject.data.data.price + " €"}
                    </Card.Text>

                    <div className='divcenterbtnAdd'>
                        <div className='BtnFinishShop' onClick={() => addProductToCart()}>


                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}


