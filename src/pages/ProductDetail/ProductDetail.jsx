import React from 'react'
import { useSelector } from 'react-redux';
import { productData } from '../detailSlice';
import { Container } from 'react-bootstrap';

export const ProductDetail = () => {

  const productDet = useSelector(productData);
  console.log(productDet.choosenObject.data.data);

  return (
    <Container fluid className="productdetailDesign">
      

      </Container>

  )
}
