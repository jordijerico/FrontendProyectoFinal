import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getAllStoreProducts } from '../../services/apiCalls';
import ProductCard from '../../common/ProductCard/ProductCard'
import './Home.css';
export const Home = () => {

    const [getProducts, setProducts] = useState([]);

    useEffect(() => {
        if (getProducts.length === 0) {

            const getAllProducts = async () => {
                try {
                    const products = await getAllStoreProducts();
                    setProducts(products.data.data)
                } catch (error) {
                    console.log(error)
                }
            }
            getAllProducts();
        }
    }, [getProducts]);



    return (
        <Container fluid className='homeDesign'>
            <div className='banner'>


            </div>
            <div className='gridProducts'>
                {getProducts.map(product => {
                    return (
                        <ProductCard  key={product.id} product={product} />
                    )
                })}
            </div>
        </Container>
    )
}
