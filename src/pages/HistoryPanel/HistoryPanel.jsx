import React, { useEffect, useState } from 'react'
import './HistoryPanel.css'
import { Container } from 'react-bootstrap'
import { getAllOrderProductsByUser } from '../../services/apiCalls';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import UserCard from '../../common/UserCard/UserCard';

export const HistoryPanel = () => {

  const [getOrders, setOrders] = useState([]);
  const datosCredencialesRedux = useSelector(userData);

  useEffect(() => {


    if (getOrders.length == 0) {
      const getAllOrdersProducts = async () => {
        try {
          const ordersproducts = await getAllOrderProductsByUser(datosCredencialesRedux?.credentials?.usuario.userId, datosCredencialesRedux.credentials?.token);
          console.log(ordersproducts.data.data);
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
      <div className="gridUsers">
        {getOrders.map(user => {
          return (
            <UserCard key={user.id} user={user} />
          )
        })}
      </div>

    </Container>
  )
}
