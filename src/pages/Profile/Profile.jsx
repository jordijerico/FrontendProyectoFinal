import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { userData } from '../userSlice'
import dayjs from 'dayjs'
import './Profile.css'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {

    const navigate = useNavigate();
    const perfil = useSelector(userData);
    return (
        <Container fluid className="profileDesign">
            {perfil?.credentials?.token !== undefined ? (
                <>

                    <div className='profileData'>
                        <div className='dataUser'> Nombre: <p className='pData'>{perfil.credentials.usuario.name} {perfil.credentials.usuario.surname}</p> </div>
                        <div className='dataUser'>Teléfono: <p className='pData'>{perfil.credentials.usuario.phone} </p></div>
                        <div className='dataUser'>Fecha de nacimiento: <p className='pData'>{dayjs(perfil.credentials.usuario.birthdate).format("DD/MM/YYYY")}</p></div>
                        <div className='dataUser'>Dirección: <p className='pData'>{perfil.credentials.usuario.address}</p></div>
                        <div className='dataUser'>Método de Pago: <p className='pData'>{perfil.credentials.usuario.payment}</p></div>
                        <div className='dataUser'>Email:<p className='pData'>{perfil.credentials.usuario.email}</p></div>
                        <div className='dataUser'>DNI: <p className='pData'>{perfil.credentials.usuario.dni}</p></div>
                    </div>
                    <div className='divCenterBtn'>
                        <div className='btnEditProfile' onClick={() => { navigate("/profileupdate") }} >Editar perfil</div>
                    </div>

                </>
            ) :
                (<div>Loading profile...</div>)}
        </Container>

    )
}

