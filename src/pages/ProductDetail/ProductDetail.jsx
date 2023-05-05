import React from 'react'
import { useSelector } from 'react-redux';
import { productData } from '../detailSlice';
import { Container } from 'react-bootstrap';
import { ProductDetailCard } from '../../common/ProductDetailCard/ProductDetailCard';
import './ProductDetail.css'
export const ProductDetail = () => {

  const productDet = useSelector(productData);

  return (
    <Container fluid className="productdetailDesign">

      <ProductDetailCard  product={productDet} />
    </Container>

  )
}
