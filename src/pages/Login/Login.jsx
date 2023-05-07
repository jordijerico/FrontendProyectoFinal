import React, { useEffect, useState } from 'react'
import { InputText } from '../../common/InputText/InputText'
import { loginMe } from '../../services/apiCalls';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { login } from "../userSlice"
import { decodeToken } from 'react-jwt';
import { validate } from '../../helpers/useful';
export const Login = () => {

    const dispatch = useDispatch();


    const navigate = useNavigate();
    const [credenciales, setCredenciales] = useState({
        email: "",
        password: "",
    });

    const [credencialesError, setCredencialesError] = useState({
        emailError: "",
        passwordError: "",
    });

    const [registerAct, setRegisterAct] = useState(false);


    useEffect(() => {

        for (let error in credencialesError) {
            if (credencialesError[error] !== "" && credenciales !== "") {
                setRegisterAct(false);
                return;
            }
        }
        setRegisterAct(true);
    });



    const inputHandler = (e) => {
        setCredenciales((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const inputValidate = (e) => {


        let error = "";

        let checked = validate(
            e.target.name,
            e.target.value,
        );

        error = checked.message;


        setCredencialesError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: error,
        }));
    };




    const loginFunction = async () => {
        if (credenciales.email !== "" || credenciales.password !== "") {
            try {
                const loginResult = await loginMe(credenciales)
                if (loginResult.data.success) {
                    try {
                        const decoded = decodeToken(loginResult.data.data)
                        let datosBackend = {

                            token: loginResult.data.data,
                            usuario: decoded

                        }

                        dispatch(login({ credentials: datosBackend }));

                        setTimeout(() => {
                            navigate("/")
                        }, 1000);
                    } catch (error) {
                        console.log(error);
                    }
                }

            } catch (error) {
                console.log(error);
            }
        }


    }


    return (
        <Container fluid className="loginDesign">

            <InputText
                type="email"
                name="email"
                placeholder="Email"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div className='divMessageError'>{credencialesError.emailError}</div>
            <InputText
                type="password"
                name="password"
                placeholder="Contraseña"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div className='divMessageError'>{credencialesError.passwordError}</div>


            <div
                className="buttonLoginDesign"
                onClick={
                    registerAct
                        ? () => {
                            loginFunction();
                        }
                        : () => { }
                }
            >
                Iniciar Sesión
            </div>

            <div className='divCrearCuenta' onClick={() => { navigate("/register") }}>¿No tiene una cuenta? Cree una aquí &gt;</div>


            <div className="form-container">
                <form>
                    <div className="form-container__sign-buttons">
                        <button type="button">
                            <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205
            11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422
            18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084
            1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
            0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267
            1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12
            3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0
            1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24
            12.297c0-6.627-5.373-12-12-12"></path></svg>
                            <span>Sign in with GitHub</span>
                        </button>
                        <button type="button">
                            <svg width="16" height="16"><g fill="none"><path d="M2.629 10.659A5.893 5.893 0 0 1 2 8c0-.956.226-1.858.629-2.659l2.065 1.544a3.487 3.487 0 0 0 0 2.23L2.629 10.66z" fill="#FBBC05"></path><path d="M2.629 5.341C3.627 3.357 5.713 2 8.139 2c1.563 0 2.959.573 4.047 1.5L10.4 5.245a3.6 3.6 0 0 0-2.26-.79c-1.61 0-2.97 1.015-3.446 2.43L2.629 5.34z" fill="#EA4335"></path><path d="M2.628 10.657L4.692 9.11c.475 1.417 1.835 2.435 3.448 2.435 1.702 0 2.986-.845 3.293-2.318H8.14V6.91h5.72c.084.355.14.736.14 1.091 0 3.818-2.79 6-5.86 6-2.427 0-4.514-1.358-5.512-3.343z" fill="#34A853"></path><path d="M12.141 12.506l-1.96-1.483a2.704 2.704 0 0 0 1.252-1.796H8.14V6.91h5.72c.084.355.14.736.14 1.091 0 1.956-.732 3.482-1.859 4.506z" fill="#4285F4"></path></g></svg>
                            <span>Sign in with Google</span>
                        </button>
                    </div>
                </form>
            </div>



        </Container>
    )
}
