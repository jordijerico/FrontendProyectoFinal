import React from 'react'
import './ShoppingCartPanel.css'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { productCartData } from '../shoppingcartSlice'
import { ProductDetailCardCart } from '../../common/ProductDetailCardCart/ProductDetailCardCart'
import { useNavigate } from 'react-router-dom'

export const ShoppingCartPanel = () => {

  const navigate = useNavigate();
  const reduxData = useSelector(productCartData);
  const productMap = reduxData.ProductCart




  const finishBuy = () => {
    try {
      dispatch(addChoosen({ choosenObject: [{}] }));
      navigate("/")

    } catch (error) {
      console.log(error);
    }

  }
  return (
    <Container fluid className="shoppingCartPanelDesign">
      <div>CARRITO</div>

      {productMap.map((productDetail) => {
        const productoArray = productDetail.ProductCart
        return (

          <ProductDetailCardCart product={productoArray} key={productoArray.id} />
        );
      })}


      <div className='divcenterbtnAdd'>
        <div className='BtnFinishShop' onClick={() => finishBuy()}>
          COMPRAR

        </div>
      </div>

    </Container>
  )
}
