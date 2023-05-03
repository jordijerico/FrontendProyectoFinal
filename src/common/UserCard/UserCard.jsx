import Card from 'react-bootstrap/Card';
import './UserCard.css'
import { deleteUserByAdmin } from '../../services/apiCalls'
import { useSelector } from 'react-redux';
import { userData } from '../../pages/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export function UserCard({ user }) {
    const datosCredencialesRedux = useSelector(userData);
    const deleteUserFunction = async () => {
        try {
            await deleteUserByAdmin(user.id, datosCredencialesRedux.credentials?.token);
            window.location.reload(true);
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Card className='cardUser' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{user.name} {user.surname} </Card.Title>
                <Card.Text>
                    {user.role_id === 1 ? (
                        <>
                            {user.dni}  <br></br>
                            {user.email} 
                        </>
                    ) : (
                        <>
                            {user.dni}
                            {user.email} 
                            <span className='btnDeleteUser' onClick={() => deleteUserFunction()}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg></span>

                        </>
                    )
                    }

                </Card.Text>

            </Card.Body>
        </Card>
    );
}

export default UserCard;