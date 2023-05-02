import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import UserCard from '../../common/UserCard/UserCard'
import { getAllUsersByAdmin } from '../../services/apiCalls'
import { userData } from '../userSlice'
import "./AdminPanel.css"
export const AdminPanel = () => {

    const [getUsers, setUsers] = useState([])
    const datosCredencialesRedux = useSelector(userData);


    useEffect(() => {

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
