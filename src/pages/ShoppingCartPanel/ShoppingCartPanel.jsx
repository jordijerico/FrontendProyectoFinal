import React from 'react'
import './ShoppingCartPanel.css'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addProductCart, productCartData, cleanProductCart } from '../shoppingcartSlice'
import { ProductDetailCardCart } from '../../common/ProductDetailCardCart/ProductDetailCardCart'
import { useNavigate } from 'react-router-dom'

export const ShoppingCartPanel = () => {

  const navigate = useNavigate();
  let reduxData = useSelector(productCartData);
  const productMap = reduxData.ProductCart
  const dispatch = useDispatch();


  console.log(productMap);


  const finishBuy = () => {
    try {
      dispatch(addChoosen({ choosenObject: [{}] }));
      navigate("/")

    } catch (error) {
      console.log(error);
    }

  }

  const emptyCart = () => {
    try {
      dispatch(cleanProductCart({ ProductCart: {} }));
      navigate("/")

    } catch (error) {
      console.log(error);
    }

  }


  return (
    <Container fluid className="shoppingCartPanelDesign">
      <div className='titleCart'>CARRITO</div>


      {productMap.length === 0 ? (
        <>
          <div className='msgEmpty'>Todavía no hay productos en tu carrito</div>

        </>

      ) : (
        <>
          {productMap.map((productDetail) => {
            const productoArray = productDetail.ProductCart
            return (

              <ProductDetailCardCart product={productoArray} key={productoArray.id} />
            );
          })}
        </>
      )


      }





      <div className='divcenterbtnAdd'>
        <div className='BtnFinishShop' onClick={() => finishBuy()}>
          COMPRAR

        </div>
        <div className='BtnFinishShop' onClick={() => emptyCart()}>
          VACIAR

        </div>
      </div>

    </Container>
  )
}
