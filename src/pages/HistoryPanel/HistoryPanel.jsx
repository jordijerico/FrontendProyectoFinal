import React, { useEffect, useState } from 'react'
import './HistoryPanel.css'
import { Container } from 'react-bootstrap'
import { getAllOrderProductsByUser } from '../../services/apiCalls';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import HistoryCardInfo from '../../common/HistoryCard/HistoryCard';

export const HistoryPanel = () => {

  const [getOrders, setOrders] = useState([]);
  const datosCredencialesRedux = useSelector(userData);

  useEffect(() => {


    if (getOrders.length == 0) {
      const getAllOrdersProducts = async () => {
        try {
          const ordersproducts = await getAllOrderProductsByUser(datosCredencialesRedux?.credentials?.usuario.userId, datosCredencialesRedux.credentials?.token);
          setOrders(ordersproducts.data.data)
        } catch (error) {
          console.log(error)
        }

      }
      getAllOrdersProducts();

    }

  }, [getOrders]);


  return (
    <Container fluid className="HistoryPanelDesign">
      <div className="gridHistory">
        {getOrders.map(history => {
          return (
            <HistoryCardInfo key={history.id} history={history} />
          )

        })}

      </div>

    </Container>
  )
}
