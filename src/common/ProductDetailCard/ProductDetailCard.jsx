import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ProductDetailCard.css"
export const ProductDetailCard = ({ product }) => {





    return (
        <Card className='cardProduct2' style={{ width: '18rem' }}>
            <Card.Img className='cardProduct2image' variant="top" src={product.choosenObject.data.data.image} />
            <Card.Body className='cardProduct2ibody'>
                <Card.Title>{product.choosenObject.data.data.name}</Card.Title>
                <Card.Text>
                    {"Material: " + product.choosenObject.data.data.material} <br />
                </Card.Text>
                <Card.Text>
                {product.choosenObject.data.data.description}<br />
                </Card.Text>
                <Card.Text>
                {"Precio: " + product.choosenObject.data.data.price + " €"}
                </Card.Text>

                <div className='divcenterbtnAdd'>
                    <div className='btnAddCart'> <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                        <path d="M15 6h6m-3 -3v6" />
                    </svg></div>
                </div>
            </Card.Body>
        </Card>
    );
}


