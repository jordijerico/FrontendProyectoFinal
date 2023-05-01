import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { userData } from '../userSlice'
import   dayjs  from 'dayjs'
import './Profile.css'
export const Profile = () => {


    const perfil = useSelector(userData);
    return (
        <Container fluid className="profileDesign">
            {perfil?.credentials?.token !== undefined ? (
                <>
                <p className='titleProfile'>MI PERFIL</p> 
                    <div className='profileData'> 
                        <div>Nombre: {perfil.credentials.usuario.name}</div> <hr />
                        <div>Apellido: {perfil.credentials.usuario.surname}</div><hr />
                        <div>Telefono: {perfil.credentials.usuario.phone}</div><hr />
                        <div>Email: {perfil.credentials.usuario.email}</div><hr />
                        <div>DNI: {perfil.credentials.usuario.dni}</div><hr />
                        <div>Dirección: {perfil.credentials.usuario.address}</div><hr />
                        <div>Fecha Nacimiento: {dayjs(perfil.credentials.usuario.birthdate).format("DD/MM/YYYY")}</div><hr />
                        <div>Contraseña: {perfil.credentials.usuario.password}</div><hr />
                    </div>
                </>
            ) :
                (<div>Loading profile...</div>)}
        </Container>

    )
}

