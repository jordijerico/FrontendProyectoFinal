import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userData, userout } from '../../pages/userSlice'
import { Navigator } from '../Navigator/Navigator'
import './Header.css'

export const Header = () => {
    const navigate = useNavigate();

    const datosCredencialesRedux = useSelector(userData);
    const dispatch = useDispatch();
    const logoutFunction = () => {

        dispatch(userout({ credentials: {} }));
        setTimeout(() => {
            navigate("/")
        }, 200);
    }

    return (
        <div className="headerDesign">

            {datosCredencialesRedux.credentials?.token && datosCredencialesRedux?.credentials?.usuario?.roleId === 1 ? (
                <>
                    <div className='logoDesign' onClick={() => { navigate("/") }}></div>
                    <div className='linksNav'>
                        <Navigator ruta={datosCredencialesRedux?.credentials?.usuario?.name} destino={"/profile"} />
                        <Navigator ruta={"Admin"} destino={"/admin"} />
                        <div className='logoutDesign' onClick={() => logoutFunction()}>Logout</div>
                    </div>
                </>
            ) : (datosCredencialesRedux.credentials?.token && datosCredencialesRedux?.credentials?.usuario?.roleId === 2 ? (
                <>
                    <div className='logoDesign' onClick={() => { navigate("/") }}></div>
                    <div className='linksNav'>
                        <Navigator ruta={datosCredencialesRedux?.credentials?.usuario?.name} destino={"/profile"} />
                        <div className='logoutDesign' onClick={() => logoutFunction()}>Logout</div>
                    </div>
                </>
            ) : (
                <>
                    <div className='logoDesign' onClick={() => { navigate("/") }}></div>
                    <div className='linksNav'>
                        <Navigator ruta={"Login"} destino={"/login"} />
                        <Navigator ruta={"Register"} destino={"/register"} />
                    </div>
                </>
            )

            )
            }

        </div>
    )
}
