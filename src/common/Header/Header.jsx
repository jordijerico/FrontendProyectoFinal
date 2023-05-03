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
            <div className='divLogo'><div className='logoDesign' onClick={() => { navigate("/") }}></div></div>
            {datosCredencialesRedux.credentials?.token && datosCredencialesRedux?.credentials?.usuario?.roleId === 1 ? (
                <>
                    <div className='linksNav'>
                        <div className='divBtnProfile'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="svgLinkNav2 icon icon-tabler icon-tabler-user" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#deeeeb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="7" r="4" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <Navigator ruta={'Perfil'} destino={"/profile"} />
                        </div>
                        <div className='divBtnAdmin'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="svgLinkNav2 icon icon-tabler icon-tabler-tool" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#deeeeb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
                            </svg>
                            <Navigator ruta={"Admin"} destino={"/admin"} />
                        </div>
                        <div className='logoutDesign' onClick={() => logoutFunction()}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#deeeeb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 12h14l-3 -3m0 6l3 -3" />
                        </svg> Cerrar Sesión</div>
                    </div>
                </>
            ) : (datosCredencialesRedux.credentials?.token && datosCredencialesRedux?.credentials?.usuario?.roleId === 2 ? (
                <>
                    <div className='linksNav'>
                        <div className='divBtnProfile'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="svgLinkNav2 icon icon-tabler icon-tabler-user" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#deeeeb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="7" r="4" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <Navigator ruta={'Perfil'} destino={"/profile"} />
                        </div>
                        <div className='logoutDesign' onClick={() => logoutFunction()}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#deeeeb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 12h14l-3 -3m0 6l3 -3" />
                        </svg> Cerrar Sesión</div>
                    </div>
                </>
            ) : (
                <>
                    <div className='linksNav'>
                        <div className='divBtnLogin'>
                            <Navigator ruta={<svg xmlns="http://www.w3.org/2000/svg" className="svgLinkNav icon icon-tabler icon-tabler-login" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#deeeeb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                            </svg>} destino={"/login"} />
                            <p className='textNavbarSvg'>Iniciar Sesión</p>
                        </div>
                        <div className='divBtnRegister'>
                            <Navigator ruta={<svg xmlns="http://www.w3.org/2000/svg" className="svgLinkNav icon icon-tabler icon-tabler-user-plus" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#deeeeb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                <path d="M16 11h6m-3 -3v6" />
                            </svg>} destino={"/register"} />
                            <p className='textNavbarSvg'>Registrarse</p>
                        </div>
                    </div>
                </>

            )

            )
            }

        </div>
    )
}
