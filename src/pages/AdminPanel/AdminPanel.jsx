import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../../common/UserCard/UserCard'
import { getAllUsersByAdmin } from '../../services/apiCalls'
import { userData } from '../userSlice'
import "./AdminPanel.css"
import { reload, reloadData } from '../bringUpdateDataSlice'
export const AdminPanel = () => {

    const [getUsers, setUsers] = useState([])
    const dispatch = useDispatch();
    const datosCredencialesRedux = useSelector(userData);
    const updatedInfo = useSelector(reloadData);

    useEffect(() => {

        if (updatedInfo?.interruptor?.recarga) {
            setUsers([]);
        }

    });


    useEffect(() => {

        dispatch(reload({ interruptor: {} }));

        if (getUsers.length == 0) {
            const getAllUsers = async () => {
                try {
                    const users = await getAllUsersByAdmin(datosCredencialesRedux.credentials?.token);
                    setUsers(users.data.data)
                } catch (error) {
                    console.log(error)
                }

            }
            getAllUsers();

        }

    }, [getUsers]);




    return (
        <Container fluid className="AdminPanelDesign">
            <div className="gridUsers">
                {getUsers.map(user => {
                    return (
                        <UserCard key={user.id} user={user} />
                    )
                })}
            </div>

        </Container>

    )
}
