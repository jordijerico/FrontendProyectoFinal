import React from 'react'
import './ShoppingCartPanel.css'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { productCartData } from '../shoppingcartSlice'
import { ProductDetailCardCart } from '../../common/ProductDetailCardCart/ProductDetailCardCart'

export const ShoppingCartPanel = () => {


  const productDetail = useSelector(productCartData);


  return (
    <Container fluid className="shoppingCartPanelDesign">
      <ProductDetailCardCart product={productDetail} />

    </Container>
  )
}
